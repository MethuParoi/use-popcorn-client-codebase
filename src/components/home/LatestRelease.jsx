import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../../assets/new_release.webp";

const LatestRelease = () => {
  return (
    <div className="xl:max-w-[1300px] mx-auto">
      <h2 className="text-3xl font-semibold text-center border-b-2 border-gray-500 w-[240px] mx-auto">
        Latest Release
      </h2>

      <div className="flex flex-col items-start px-4 md:px-0 gap-y-8 md:flex-row md:justify-center md:items-start md:gap-x-20 my-14">
        {/* img section */}
        <div className="md:w-[40%] ">
          <img
            className="h-[400px] md:h-[500px] w-[500px] rounded-md object-fill object-center"
            src={img}
            alt=""
          />
        </div>

        {/* description section */}
        <div className="md:w-[40%]">
          <h3 className="text-2xl font-semibold text-gray-600 border-b-2 border-gray-500 w-[160px]">
            NEW RELEASE
          </h3>

          <h2 className="text-3xl font-semibold my-6">
            CAPTAIN AMERICA: BRAVE NEW WORLD
          </h2>
          {/* genre */}
          <div className="flex items-center gap-x-4">
            <div className="badge badge-secondary bg-green-200 border-transparent text-gray-800">
              Sci-Fi
            </div>
            <div className="badge badge-secondary bg-green-200 border-transparent text-gray-800">
              Action
            </div>
            <div className="badge badge-secondary bg-green-200 border-transparent text-gray-800">
              Adventure
            </div>
          </div>

          <p className="text-md text-gray-600 my-10 line-clamp-6 lg:line-clamp-none">
            Captain America: Brave New World is an American superhero film based
            on the Marvel Comics character Sam Wilson / Captain America.
            Produced by Marvel Studios and distributed by Walt Disney Studios
            Motion Pictures, it is intended to be the fourth installment in the
            Captain America film series, a continuation of the television
            miniseries The Falcon and the Winter Soldier (2021), and the 35th
            film in the Marvel Cinematic Universe (MCU). The film is directed by
            Julius Onah, who co-wrote the script with Peter Glanz along with
            Matthew Orton.
          </p>

          <button
            onClick={() =>
              window.open("https://www.imdb.com/title/tt14513804/", "_blank")
            }
            className="text-xl font-semibold flex items-center gap-x-2 text-secondary hover:text-primary"
          >
            <p>VIEW MORE INFORMATION</p>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
