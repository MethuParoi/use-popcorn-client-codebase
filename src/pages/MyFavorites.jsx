import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/ui/Loader/Loader";
import MovieCards from "../components/home/MovieCard";
import FavoriteMovieCards from "../components/favorite-movies/FavoriteMovieCard";

const MyFavorites = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Favorite Movies";
    document.title = pageTitle;
  }, [location]);
  const { user } = useContext(AuthContext);

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://assignment-10-server-three-theta.vercel.app/all-movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/favorite-movie/${user.email}`)
      .then((res) => {
        setId(res.data.movies);
        //filtering the movies
        const favMovies = movies.filter((movie) => id.includes(movie._id));
        setFavorites(favMovies);
      });
  }, [movies, user?.email]);

  const handleRemoveFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie._id !== movieId)
    );
  };

  return (
    <div>
      <div className="z-50 fixed top-1/2 left-1/2">{loading && <Loader />}</div>
      <h2 className="text-3xl font-semibold text-center  my-8 border-b-2 border-gray-400 w-[250px] mx-auto">
        Favorite Movies
      </h2>
      <div>
        {favorites.length === 0 && (
          <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16">
            No favorite movies found !
          </h2>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-16 justify-items-center my-16 xl:max-w-[1300px] mx-auto">
        {favorites &&
          favorites.map((movie) => (
            <FavoriteMovieCards
              key={movie._id}
              movie={movie}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default MyFavorites;
