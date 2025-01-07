import { CiCalendarDate } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function MovieCards({ movie }) {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate(`/movie-details/${movie._id}`);
  };
  return (
    <div className="card bg-base-100 dark:bg-gray-700 w-80 xl:w-72 shadow-xl">
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
            handleExplore();
            setDetails(movie);
          }}
          className="w-[100%] h-12 bg-primary hover:bg-secondary text-neutral dark:text-white text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto mt-4"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCards;
