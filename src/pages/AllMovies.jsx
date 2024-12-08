import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCards from "../components/home/MovieCard";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";
import e from "cors";
import { IoSearch } from "react-icons/io5";

const AllMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | All Movies";
    document.title = pageTitle;
  }, [location]);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://assignment-10-server-three-theta.vercel.app/all-movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.movie_title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
    console.log(filtered);
  };
  return (
    <div>
      <div className="z-50 fixed top-1/2 left-1/2">{loading && <Loader />}</div>
      <div className="w-full my-4 flex items-center justify-center">
        <input
          className="border-2 border-gray-400 rounded-lg shadow-lg h-10 w-[250px] sm:w-[350px] px-2"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch();
          }}
          placeholder="Search for a movie"
        />
        <button
          onClick={handleSearch}
          className="h-10 w-14 bg-primary flex items-center justify-center ml-[-5px] rounded-r-lg hover:bg-secondary"
        >
          <IoSearch className="text-2xl text-gray-200" />
        </button>
      </div>
      <h2 className="text-3xl font-semibold text-center  my-8 border-b-2 border-gray-400 w-[190px] mx-auto">
        All Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-16 justify-items-center my-16 xl:max-w-[1300px] mx-auto">
        {search.length !== 0 &&
          filteredMovies &&
          filteredMovies.map((movie) => (
            <MovieCards key={movie._id} movie={movie} />
          ))}

        {search.length === 0 &&
          movies &&
          movies.map((movie) => <MovieCards key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
};

export default AllMovies;
