import { CiCalendarDate } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function FavoriteMovieCards({ movie, onRemoveFavorite }) {
  const { user } = useContext(AuthContext);
  const handleDelete = () => {
    axios
      .delete(
        `https://assignment-10-server-three-theta.vercel.app/delete-favorite-movie/${user.email}/${movie._id}`
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Movie deleted from favorites");
          onRemoveFavorite(movie._id);
        }
      });
  };
  return (
    <div className="card bg-base-100 dark:bg-gray-700 w-80 shadow-xl">
      <figure>
        <img
          className="w-full h-60 object-cover"
          src={movie.movie_poster}
          alt="spot"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{movie.movie_title}</h2>
        <div className="flex gap-x-2 mt-1">
          {movie.genre &&
            movie.genre.map((genre) => (
              <div
                key={genre}
                className="badge badge-secondary bg-green-200 border-transparent text-gray-800"
              >
                {genre}
              </div>
            ))}
        </div>

        <div className="flex items-center justify-around my-2">
          <div className="flex items-center gap-x-2">
            <TfiTimer className="text-xl" />
            <p className="text-gray-600">{movie.duration} min</p>
          </div>

          <div className="flex items-center gap-x-2">
            <CiCalendarDate className="text-xl" />
            <p className="text-gray-600">{movie.release_year}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaRegStarHalfStroke className="text-xl" />
            <p className="text-gray-600">{movie.rating}</p>
          </div>
        </div>

        <button
          onClick={() => {
            handleDelete();
          }}
          className="w-[100%] h-12 bg-primary hover:bg-secondary text-neutral dark:text-white text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto mt-4"
        >
          Delete Favorite
        </button>
      </div>
    </div>
  );
}

export default FavoriteMovieCards;
