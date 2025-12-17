import React from "react";
import { useFetch } from "./useFech";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";
const RecepiesSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);

  console.log("My Meal data =", data?.meals);

  const meals = data?.meals || [];
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // appendDot:()=>null,

  };
  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className=" animate-spin inline-block mr-2 text-blue-400" />
        Loading{title}...
      </div>
    );
  return (
    <>
      <section className="mt-2 mx-auto">
        <h2 className="text-xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
          <Clock className="mr-3 w-6 h-6 text-blue-400" />
          {title}
        </h2>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="px-10 flex justify-center">
                <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 mb-5">
                  {/* Hover low */}
                  <div className=" absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

                  <div className="flex justify-center items-center p-5">
                    <img
                      src={meal?.strMealThumb}
                      alt="Images"
                      className="h-[120px] w-[120px] rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
                    ></img>
                  </div>

                  {/* <div className="p-2 text-center">
                    <h3 className="text-xl pb-3 font-bold text-gray-100 mb-1 group-hover:text-blue-400 transition duration-300">
                      {meal.strMeal}
                    </h3>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RecepiesSlider;
