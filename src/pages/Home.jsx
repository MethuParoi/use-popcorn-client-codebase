import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import MovieCards from "../components/home/MovieCard";
import ExtraSection from "../components/home/ExtraSection";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";

function Home() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Home";
    document.title = pageTitle;
  }, [location]);

  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://assignment-10-server-three-theta.vercel.app/all-movies")
      .then((res) => {
        setMovies(res.data);
        res.data.sort((a, b) => b.rating - a.rating);
        setFeaturedMovies(res.data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="relative">
      <div className="z-50 fixed top-1/2 left-1/2">{loading && <Loader />}</div>
      <HeroSection />
      <h2 className="text-3xl font-semibold text-center mt-16 mb-8">
        Featured Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-16 justify-items-center my-16 xl:max-w-[1300px] mx-auto">
        {featuredMovies &&
          featuredMovies.map((movie) => (
            <MovieCards key={movie._id} movie={movie} />
          ))}
      </div>
      <ExtraSection />
    </div>
  );
}

export default Home;
