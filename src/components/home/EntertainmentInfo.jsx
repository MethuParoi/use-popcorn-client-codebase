import img1 from "../../assets/news-1.webp";
import img2 from "../../assets/news-2.webp";
import img3 from "../../assets/news-3.webp";
import img4 from "../../assets/news-4.webp";

const EntertainmentInfo = () => {
  return (
    <div className="xl:max-w-[1300px] mx-auto mt-10 mb-20">
      <h2 className="text-3xl font-semibold text-center border-b-2 border-gray-500 w-[320px] mx-auto">
        Entertainment Info
      </h2>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-rows-2 my-10 gap-y-6 sm:gap-8 justify-items-center px-4">
        {/* item-1 */}
        <div
          onClick={() =>
            window.open(
              "https://editorial.rottentomatoes.com/guide/best-new-movies/",
              "_blank"
            )
          }
          className="col-span-2 row-span-2 relative group cursor-pointer md:h-[700px]"
        >
          <img src={img1} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-55 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-accent absolute bottom-5 md:bottom-14 md:left-10 left-5">
              The Best Movies of 2024. You Should Watch
            </h3>
          </div>
        </div>
        {/* item-2 */}
        <div
          onClick={() =>
            window.open("https://www.imdb.com/chart/boxoffice/", "_blank")
          }
          className=" relative group cursor-pointer md:h-[330px]"
        >
          <img src={img2} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-55 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-accent absolute bottom-5 left-5">
              Top 10 Movies of the Week
            </h3>
          </div>
        </div>
        {/* item-3 */}
        <div
          onClick={() =>
            window.open("https://www.imdb.com/chart/moviemeter/", "_blank")
          }
          className=" relative group cursor-pointer md:h-[330px]"
        >
          <img src={img3} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-55 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-accent absolute bottom-5 left-5">
              Top 5 Movies of the Month
            </h3>
          </div>
        </div>
        {/* item-4 */}
        <div
          onClick={() =>
            window.open("https://www.imdb.com/poll/Ji7bSoilTZM/", "_blank")
          }
          className="col-span-2 relative group cursor-pointer md:h-[330px] w-full"
        >
          <img src={img4} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-55 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-accent absolute bottom-5 md:bottom-14 md:left-10 left-5">
              9 Films are Nominated for the Best Picture
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentInfo;
