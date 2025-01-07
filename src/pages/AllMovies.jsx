import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCards from "../components/home/MovieCard";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";
import e from "cors";
import { IoSearch } from "react-icons/io5";
import { FaSortAmountDownAlt } from "react-icons/fa";

const AllMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | All Movies";
    document.title = pageTitle;
  }, [location]);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = axios.get(
      "https://assignment-10-server-three-theta.vercel.app/all-movies"
    );
    const fetchSortedMovies = axios.get(
      "https://assignment-10-server-three-theta.vercel.app/sorted-movies"
    );

    Promise.all([fetchMovies, fetchSortedMovies])
      .then(([moviesRes, sortedMoviesRes]) => {
        setMovies(moviesRes.data);
        setSortedMovies(sortedMoviesRes.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.movie_title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
    console.log("filtered", filteredMovies);
  };
  return (
    <div>
      <div className="z-50 fixed top-1/2 left-1/2">{loading && <Loader />}</div>
      <div className="w-full mt-24 mb-4 flex items-center justify-center">
        <input
          className="border-2 border-gray-400 rounded-lg shadow-lg h-10 w-[250px] sm:w-[350px] px-2"
          type="text"
          onChange={(e) => {
            setSort(false);
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

      <h2 className="text-3xl font-semibold text-center  my-8 border-b-2 border-gray-400 w-[270px] mx-auto">
        {search.length !== 0
          ? "Searched Movies"
          : sort
          ? "Sorted Movies"
          : "All Movies"}{" "}
      </h2>
      {/* sort */}
      <div className="flex items-center justify-center lg:justify-start xl:max-w-[1250px] mx-auto">
        <button
          onClick={() => setSort(true)}
          className="bg-primary hover:bg-secondary text-white text-lg font-semibold px-2 py-1 rounded-lg flex items-center gap-x-2"
        >
          Sort Movies
          <FaSortAmountDownAlt />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 justify-items-center mt-10 mb-16 xl:max-w-[1300px] mx-auto">
        {sort &&
          search.length === 0 &&
          sortedMovies &&
          sortedMovies.map((movie) => (
            <MovieCards key={movie._id} movie={movie} />
          ))}
        {!sort &&
          search.length !== 0 &&
          filteredMovies &&
          filteredMovies.map((movie) => (
            <MovieCards key={movie._id} movie={movie} />
          ))}

        {!sort &&
          search.length === 0 &&
          movies &&
          movies.map((movie) => <MovieCards key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
};

export default AllMovies;
