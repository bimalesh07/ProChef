import React from 'react'
import { Features } from 'tailwindcss'
import { Clock,Globe } from 'lucide-react'
import { Link } from 'react-router-dom';
const CategorySelcted = ({ title, filterByCategory }) => {
  const Featurescategory = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <>
      <section>
        <h2 className="text-xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
          <Clock className="mr-3 w-6 h-6 text-blue-400" />
          {title}
        </h2>
        <div className="bg-gray-950/80 border-b border-y-gray-800 shadow-inner">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide">
            <div className=" flex items-center px-3 space-x-4 p-3">
              {/* <div className="flex items-center text-lg font-bold text-yellow-400 pr-3  whitespace-nowrap">
                <Globe className="w-5 mr-2 " />
                Global Cuisiness
              </div> */}
              {Featurescategory.map((cate) => (
                <Link
                  to={`search/${cate}`}
                  onClick={() => filterByCategory(cate)}
                  key={cate}
                  className="cursor-pointer text-gray-200 text-sm whitespace-nowrap font-medium hover:text-white transition duration-200 py-1.5 px-4 rounded-full bg-gray-800 border-gray-700 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/50 transform hover:scale-[1.05]"
                >
                  {cate}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySelcted