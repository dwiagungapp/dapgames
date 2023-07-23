import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

const CrudForm = () => {
  const { state, handleFunctions } = useContext(GlobalContext);
  const { Id } = useParams();

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

  const {
    input,
    setInput,
    setCurrentId,
  } = state;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [initialCategory, setInitialCategory] = useState(null);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    const categoryValue = selectedOption ? selectedOption.value : null;
    setInput({ ...input, category: categoryValue });
  };

  const {
    handleSubmit,
    handleInput,
  } = handleFunctions;

  useEffect(() => {
    if (Id !== undefined) {
      axios
        .get(`http://localhost:3002/game/${Id}`)
        .then((res) => {
          let data = res.data.data;
          setInput({
            name: data.name,
            description: data.description,
            category: data.category,
            release_year: data.release_year,
            size: data.size,
            price: data.price,
            rating: data.rating,
            image_url: data.image_url,
            platform: data.platform,
          });
          setCurrentId(data.id);
          setInitialCategory(data.category);
          setSelectedCategory(
            categoryOptions.find((option) => option.value === data.category)
          );
        });
    }
  }, [Id, setInput, setCurrentId]);  

  return (
    <>
    <section className="p-4 font-poppins">
    <div className="border p-4 mb-4 bg-white">
    <nav aria-label="breadcrumb">
  <ol className="flex leading-none text-indigo-600 text-sm divide-x divide-[#FF8F00]">
    <li className="pr-4">
    <Link reloadDocument
                    to="/dashboard/list-game"
                    className="text-[#FF8F00] hover:text-opacity-70 py-2"
                  >
                          List Games
                  </Link>
    </li>
    <li className="px-4 text-gray-700" aria-current="page">Form Input Games</li>
  </ol>
</nav>
          </div>
      <div className="pt-6 px-10 pb-4 bg-white w-auto sm:w-auto md:w-auto border-2 border-2 mt-6">
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
  <div className="flex flex-wrap">
    <div className="w-full">
      <label className="block mb-1">Game Name</label>
      <input className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5" 
       onChange={handleInput}
       value={input.name}
       name="name"
       type="text" 
      placeholder="Game Name"
              required
      />
    </div>
  </div>
  <div className="w-full">
      <label className="block mb-1" htmlFor="formGridCode_last">Image URL</label>
      <input onChange={handleInput}
              value={input.image_url}
              name="image_url"
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
              placeholder="Image URL"
              required
      />
    </div>
    <div className="w-full">
      <label className="block mb-1">Description</label>
      <textarea onChange={handleInput}
              value={input.description}
              name="description"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
              placeholder="Description"
              required
      />
    </div>

    <div className="w-full">
      <label className="block mb-1">Category</label>
      <Select
           options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="Select a category"
            className="text-sm"
            />
      </div>

  <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div className="w-full px-2 md:w-1/3">
      <label className="block mb-1">Release Year</label>
      <input 
       onChange={handleInput}
       value={input.release_year}
       name="release_year"
       type="number"
       min="2007"
       max="2023"
       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
       placeholder="2007"
       required
      />
    </div>

    <div className="w-full px-2 md:w-1/3">
      <label className="block mb-1">Size (MB)</label>
      <input 
       onChange={handleInput}
       value={input.size}
       name="size"
       type="number"
       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
       placeholder="Size"
       required
      />
    </div>

    <div className="w-full px-2 md:w-1/3">
      <label className="block mb-1">Price</label>
      <input 
      onChange={handleInput}
      value={input.price}
      name="price"
      type="number"
      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
      placeholder="Price"
      required
      />
    </div>
  </div>

  <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div className="w-full px-2 md:w-1/2">
      <label className="block mb-1">Rating (0-5)</label>
      <input 
      onChange={handleInput}
      value={input.rating}
      name="rating"
      type="number"
      min="0"
      max="5"
      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
      placeholder="Rating"
      required
      />
    </div>
    <div className="w-full px-2 md:w-1/2">
      <label className="block mb-1">Platform</label>
      <input 
       onChange={handleInput}
       value={input.platform}
       name="platform"
       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F05423] focus:border-[#F05423] block w-full p-2.5"
       placeholder="Android, iOS, PC"
       required
      />
    </div>
  </div>
  <div className="flex justify-start py-4">
  <button type={'submit'} className="text-white bg-[#ff8f00] hover:bg-opacity-75 focus:ring-4 focus:ring-[#ff8f00] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Submit</button>
  <button type="button" className="focus:outline-none text-white bg-[#213053] hover:bg-opacity-75 focus:ring-4 focus:ring-[#213053] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> <Link reloadDocument to="/dashboard/list-game"> Back </Link></button>
  </div>
</form>
</div> 
      </section>
    </>
  );
};

export default CrudForm;