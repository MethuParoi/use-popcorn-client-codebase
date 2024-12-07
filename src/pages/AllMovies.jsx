import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCards from "../components/home/MovieCard";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";

const AllMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | All Movies";
    document.title = pageTitle;
  }, [location]);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://assignment-10-server-three-theta.vercel.app/all-movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="z-50 fixed top-1/2 left-1/2">{loading && <Loader />}</div>
      <h2 className="text-3xl font-semibold text-center  my-8 border-b-2 border-gray-400 w-[190px] mx-auto">
        All Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-16 justify-items-center my-16 xl:max-w-[1300px] mx-auto">
        {movies &&
          movies.map((movie) => <MovieCards key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
};

export default AllMovies;
