import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import MovieCards from "../components/home/MovieCard";
import ExtraSection from "../components/home/ExtraSection";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";
import Button from "../components/ui/Button";
import LatestRelease from "../components/home/LatestRelease";
import EntertainmentInfo from "../components/home/EntertainmentInfo";

function Home() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Home";
    document.title = pageTitle;
  }, [location]);

  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://assignment-10-server-three-theta.vercel.app/featured-movies"
      )
      .then((res) => {
        setMovies(res.data);
        setFeaturedMovies(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      <div className="z-50 fixed top-1/2 left-1/2">{loading && <Loader />}</div>
      <HeroSection />
      <h2 className="text-3xl font-semibold text-center mt-16 mb-8 border-b-2 border-gray-500 w-[280px] mx-auto">
        Featured Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-16 justify-items-center my-16 xl:max-w-[1300px] mx-auto">
        {featuredMovies &&
          featuredMovies.map((movie) => (
            <MovieCards key={movie._id} movie={movie} />
          ))}
        <div className=" justify-items-center">
          <Button
            type={"standard"}
            label={"See All Movies"}
            onClick={() => navigate("/all-movies")}
          />
        </div>
      </div>
      <LatestRelease />

      <ExtraSection />
      <EntertainmentInfo />
    </div>
  );
}

export default Home;
