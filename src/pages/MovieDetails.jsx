import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";
import { TfiTimer } from "react-icons/tfi";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Button from "../components/ui/Button";
import { toast } from "react-toastify";

function MovieDetails() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Details";
    document.title = pageTitle;
  }, [location]);

  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://assignment-10-server-three-theta.vercel.app/movie/${id}`)
      .then((res) => {
        setDetails(res.data);
        setIsLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(
        `https://assignment-10-server-three-theta.vercel.app/delete-movie/${id}`
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/all-movies");
          toast.success("Movie deleted successfully");
        }
      });
  };

  const handleAddFavorites = () => {
    axios
      .get(
        `https://assignment-10-server-three-theta.vercel.app/favorite-movie/${user.email}`
      )
      .then((res) => {
        const existingFavorites = res.data?.movies || [];

        if (!existingFavorites.includes(id)) {
          const updatedFavorites = [...existingFavorites, id];

          // Update if the user already exists
          axios
            .patch(
              `https://assignment-10-server-three-theta.vercel.app/update-favorite-movie/${user.email}`,
              {
                movies: updatedFavorites,
              }
            )
            .then(() => {
              res.status == 200 && toast.success("Movie added to favorites");
            });
        }
      })
      .catch((err) => {
        // If the user does not exist, create a new record
        if (err.response && err.response.status === 404) {
          axios
            .put(
              `https://assignment-10-server-three-theta.vercel.app/add-favorite-movie`,
              {
                user_id: user.email,
                movies: [id],
              }
            )
            .then(() => {
              toast.success("Movie added to favorites");
            });
        }
      });
  };

  return (
    <div className=" min-w-screen flex md:flex-row flex-col md:gap-x-16 md:justify-center md:mt-16 md:mb-32">
      <div className="z-50 fixed top-1/2 left-1/2">
        {isLoading && <Loader />}
      </div>
      <div>
        <img
          className="w-full h-80 object-cover
            md:w-[600px] md:h-[400px] md:rounded-lg"
          src={details?.movie_poster}
          alt="movie-poster"
        />
      </div>

      {/* movie details */}
      <div className="flex flex-col gap-y-4 md:w-[40%] px-2">
        <h1 className="text-3xl font-semibold">{details?.movie_title}</h1>
        <div className="flex gap-x-4">
          {details?.genre &&
            details?.genre.map((genre) => (
              <div
                key={genre}
                className="badge badge-secondary bg-green-200 border-transparent text-gray-800"
              >
                {genre}
              </div>
            ))}
        </div>
        <div className="flex items-center gap-x-4 my-2">
          <div className="flex items-center gap-x-2">
            <TfiTimer className="text-xl" />
            <p className="text-gray-600">{details?.duration} min</p>
          </div>

          <div className="flex items-center gap-x-2">
            <CiCalendarDate className="text-xl" />
            <p className="text-gray-600">{details?.release_year}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaRegStarHalfStroke className="text-xl" />
            <p className="text-gray-600">{details?.rating}</p>
          </div>
        </div>
        <p className="line-clamp-5 ">{details?.summary}</p>

        <div className="flex sm:flex-row sm:gap-x-4  gap-y-4 sm:gap-y-0 flex-col items-center justify-around mt-4 mb-20 md:mb-0">
          <Button
            label={"Add Favorites"}
            type={"standard"}
            onClick={handleAddFavorites}
          />
          <Button
            label={"Update Movie"}
            type={"standard"}
            onClick={() => navigate(`/update-movie/${id}`)}
          />
          <Button
            label={"Delete Movie"}
            type={"standard"}
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
