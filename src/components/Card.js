import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const Card = () => {
  const { state, handleFunctions } = useContext(GlobalContext);

  const { data, setData, fetchStatus, setFetchStatus } = state;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryOptions = [
    { value: null, label: 'All' },
    { value: 'Action', label: 'Action' },
    { value: 'Arcade', label: 'Arcade' },
    { value: 'Fighting', label: 'Fighting' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'RPG', label: 'RPG' },
    { value: 'Racing', label: 'Racing' },
    { value: 'Strategy', label: 'Strategy' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Simulators', label: 'Simulators' },
    { value: 'Other', label: 'Other' },
  ];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const {
    renderStars,
  } = handleFunctions;

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get('http://dwiagung.me/game')
        .then((res) => {
          setData([...res.data.data].reverse());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setFetchStatus(false);
        });
    }
  }, [fetchStatus, setFetchStatus, setData]);

  return (
    <>
    {/* Filter buttons */}
    <div className="flex flex-wrap mb-4 font-poppins">
    {categoryOptions.map((option) => (
  <button
    key={option.value}
    className={`mr-2 mb-2 px-4 py-2 rounded-lg ${
      selectedCategory === option.value
        ? 'bg-[#FF8F00] text-white'
        : 'bg-white text-primary'
    }`}
    onClick={() => handleCategoryFilter(option.value)}
  >
    {option.label}
  </button>
))}
      </div>

     <div className="font-poppins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {data !== null &&
  data
    .filter(
      (app) =>
        selectedCategory === null ||
        selectedCategory === 'All' || // Tambahkan kondisi ini
        app.category === selectedCategory
    )
    .map((app, index) => (
        
        <div key={app.id} className="rounded-lg flex justify-start w-full h-full md:h-40 md:flex-row bg-white shadow-xl md:max-w-xl hover:shadow-2xl transition duration-300">
      <div className="flex items-center justify-center p-4">
        <img
          className="object-fill rounded-lg"
          src={app.image_url}
          alt={app.name}
        />
      </div>
          
          <div className="rounded-lg bg-white w-full p-4 flex flex-col justify-between md:justify-between">
            <div className="mb-0">
              <div className="text-gray-900 font-bold text-lg mb-1">{app.name}</div>
              <div className="text-gray-500 text-sm mb-2">{app.category}</div>
            </div>
    <div className="flex">
              <div className="flex">
                  <span className="text-gray-500">{renderStars(app.rating)}</span>
                </div>
            </div>
          </div>
        </div>        
        // </motion.button>
))}
    {data === null && (
        <div className="flex justify-center items-center h-72">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0, 0, 0, 0)">Loading...</span>
          </div>
        </div>
      )}
</div>
</>
  );
};

export default Card;