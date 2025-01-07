import ViewCard from "../ui/ViewCard";
import imdb1 from "../../assets/imdb/imdb-1.jpeg";
import imdb2 from "../../assets/imdb/imdb-2.jpeg";
import imdb3 from "../../assets/imdb/imdb-3.jpeg";
import trending1 from "../../assets/hero/oppenhimer.jpg";
import trending2 from "../../assets/imdb/barbie.jpeg";
import trending3 from "../../assets/imdb/spiderman.jpeg";

const ExtraSection = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold text-center border-b-2 border-gray-500 w-[280px] mx-auto">
          IMDb Top Movies
        </h2>

        <div className="xl:max-w-[1300px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10 gap-y-6 sm:gap-y-0 justify-items-center">
          <ViewCard
            title={"The Shawshank Redemption"}
            link={"https://www.imdb.com/title/tt0111161/"}
            summary={
              "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion."
            }
            img={imdb1}
          />
          <ViewCard
            title={"The Godfather"}
            link={"https://www.imdb.com/title/tt0068646/"}
            summary={
              "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            }
            img={imdb2}
          />
          <ViewCard
            title={"The Dark Knight"}
            link={"https://www.imdb.com/title/tt0468569/"}
            summary={
              "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."
            }
            img={imdb3}
          />
        </div>
      </div>

      {/* trending section */}
      <div className="mt-16 mb-24">
        <h2 className="text-3xl font-semibold text-center border-b-2 border-gray-500 w-[250px] mx-auto">
          Trending Now
        </h2>

        <div className="xl:max-w-[1300px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10 gap-y-6 sm:gap-y-0 justify-items-center">
          <ViewCard
            title={"Oppenheimer"}
            link={"https://www.imdb.com/title/tt15398776/"}
            summary={
              "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II."
            }
            img={trending1}
          />
          <ViewCard
            title={"Barbie"}
            link={"https://www.imdb.com/title/tt1517268/"}
            summary={
              "Barbie faces an existential crisis that takes her on a journey of self-discovery in the real world."
            }
            img={trending2}
          />
          <ViewCard
            title={"Spider-Man: Across the Spider-Verse"}
            link={"https://www.imdb.com/title/tt9362722/"}
            summary={
              "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence."
            }
            img={trending3}
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
