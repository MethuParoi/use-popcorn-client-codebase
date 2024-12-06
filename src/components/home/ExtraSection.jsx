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
        <h2 className="text-3xl font-semibold text-center">IMDb Top Movies</h2>

        <div className="xl:max-w-[1300px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10">
          <ViewCard
            title={"The Shawshank Redemption"}
            summary={
              "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion."
            }
            img={imdb1}
          />
          <ViewCard
            title={"The Godfather"}
            summary={
              "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            }
            img={imdb2}
          />
          <ViewCard
            title={"The Dark Knight"}
            summary={
              "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."
            }
            img={imdb3}
          />
        </div>
      </div>

      {/* trending section */}
      <div>
        <h2 className="text-3xl font-semibold text-center">Trending Now</h2>

        <div className="xl:max-w-[1300px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10">
          <ViewCard
            title={"Oppenheimer"}
            summary={
              "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II."
            }
            img={trending1}
          />
          <ViewCard
            title={"Barbie"}
            summary={
              "Barbie faces an existential crisis that takes her on a journey of self-discovery in the real world."
            }
            img={trending2}
          />
          <ViewCard
            title={"Spider-Man: Across the Spider-Verse"}
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
