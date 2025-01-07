import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ViewCard from "../components/ui/ViewCard";
import upcoming1 from "../assets/upcoming/dune.jpeg";
import upcoming2 from "../assets/upcoming/avatar.jpeg";
import upcoming3 from "../assets/upcoming/Marvels.jpeg";
import upcoming4 from "../assets/upcoming/Hunger_Games.jpeg";
import upcoming5 from "../assets/upcoming/mi.jpeg";
import upcoming6 from "../assets/upcoming/Wonka.jpeg";
import banner from "../assets/upcoming/poster.webp";

const UpcomingMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Upcoming Movies";
    document.title = pageTitle;
  }, [location]);
  return (
    <div className="">
      {/* poster */}
      <div>
        <img
          className="sm:w-[100%] h-[400px] object-cover mx-auto"
          src={banner}
          alt=""
        />
      </div>
      {/* upcoming movies */}
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-center border-b-2 border-gray-400 w-[300px] mx-auto">
          Upcoming Movies
        </h2>

        <div className="xl:max-w-[1300px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center my-10 gap-x-6 gap-y-8 sm:gap-y-16 mb-24">
          <ViewCard
            title={"Dune: Part Two"}
            link={"https://www.imdb.com/title/tt15239678/"}
            summary={
              "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
            }
            img={upcoming1}
          />
          <ViewCard
            title={"Avatar 3"}
            link={"https://www.imdb.com/title/tt1757678/"}
            summary={
              "The journey continues as Jake Sully and Neytiri face new challenges on Pandora, exploring new tribes and territories."
            }
            img={upcoming2}
          />
          <ViewCard
            title={"The Marvels"}
            link={"https://www.imdb.com/title/tt10676048/"}
            summary={
              "Captain Marvel teams up with Ms. Marvel and Monica Rambeau to save the universe from a new cosmic threat."
            }
            img={upcoming3}
          />
          <ViewCard
            title={"The Hunger Games: The Ballad of Songbirds & Snakes"}
            link={"https://www.imdb.com/title/tt10545296/"}
            summary={
              "The story of a young Coriolanus Snow, set decades before he becomes the tyrannical President of Panem."
            }
            img={upcoming4}
          />
          <ViewCard
            title={"Mission: Impossible – Dead Reckoning Part Two"}
            link={"https://www.imdb.com/title/tt9603208/"}
            summary={
              "Ethan Hunt and his IMF team continue their dangerous mission to stop a catastrophic global threat."
            }
            img={upcoming5}
          />
          <ViewCard
            title={"Wonka"}
            link={"https://www.imdb.com/title/tt6166392/"}
            summary={
              "A young Willy Wonka embarks on a magical journey to become the world-famous chocolatier."
            }
            img={upcoming6}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
