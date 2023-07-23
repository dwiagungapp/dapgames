import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { FaEdit, FaTrash } from "react-icons/fa";

const CrudData = () => {
  const { handleFunctions } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);

  const { handleEdit, handleDelete } = handleFunctions;

  useEffect(() => {
    axios
      .get("http://dwiagung.me/game")
      .then((res) => {
        setData([...res.data.data].reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Calculate the index of the last job on the current page
  const lastIndex = currentPage * jobsPerPage;
  // Calculate the index of the first job on the current page
  const firstIndex = lastIndex - jobsPerPage;
  // Get the jobs to be displayed on the current page
  const currentJobs = data !== null ? data.slice(firstIndex, lastIndex) : [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container pt-6 max-w-7xl mx-auto font-poppins">
        <div className="border p-4 mb-4 bg-white">
        <nav aria-label="breadcrumb">
  <ol className="flex leading-none text-indigo-600 text-sm divide-x divide-[#FF8F00]">
    <li className="pr-4">
    <Link reloadDocument
                    to="/dashboard"
                    className="text-[#FF8F00] hover:text-opacity-70 py-2"
                  >
                          Dashboard
                  </Link>
    </li>
    <li className="px-4 text-gray-700" aria-current="page">List Games</li>
  </ol>
</nav>
          </div>
          <div className="flex justify-end">
            <Link to="/dashboard/list-game/form">
              <button className="px-4 py-2 mb-4 text-sm rounded-lg bg-[#ff8f00] text-white hover:bg-orange-400">
                Create Game Post
              </button>
            </Link>
          </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full border">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                NO
              </th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Image
              </th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Game Name
              </th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Category
              </th>
              <th
                className="px-6 py-3 text-sm text-gray-500 border-b border-gray-200 bg-gray-50"
                colSpan={2}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
          {currentJobs.map((res, index) => {
  const jobIndex = firstIndex + index + 1;
  return (
    <React.Fragment key={res.id}>
      <tr className="bg-white hover:bg-gray-100">
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{jobIndex}</div>
        </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                  <img src={res.image_url} className="w-12 h-10 rounded-lg md:w-16 md:h-16"/>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                  {res.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                  {res.category}
                </div>
              </td>
              <td className="text-sm font-medium text-center whitespace-no-wrap border-b border-gray-200 ">
              <button
                onClick={handleEdit}
                value={res.id}
                type="button"
                className="text-gray-200 transition-colors duration-150 bg-[#ff8f00] rounded-lg focus:shadow-outline hover:text-white px-4 mx-1 py-2.5 mt-2 mb-2"
              >
                <FaEdit />
              </button>

              <button
                onClick={handleDelete}
                value={res.id}
                type="button"
                className="text-gray-200 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:text-white px-4 mx-1 py-2.5 mr-2 mb-2"
              >
                <FaTrash />
              </button>
              </td>
              </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        {data !== null && data.length > jobsPerPage && (
          <ul className="flex justify-center mt-4 border rounded-lg p-2 md:mx-full bg-white">
            {Array.from({ length: Math.ceil(data.length / jobsPerPage) }).map(
              (item, index) => (
                <li
                  key={index}
                  className={`px-4 py-1 cursor-pointer ${
                    currentPage === index + 1 ? "bg-[#ff8f00] rounded-full hover:opacity-70 text-white" : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        )}
      </div>
      <div className="pb-10"></div>
    </>
  );
};

export default CrudData;