import React, { createContext, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate();

  // Materi fetching data
  const [data, setData] = useState(null);

  // Materi create data
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    release_year: "",
    size: "",
    price: "",
    rating: "",
    image_url: "",
    platform: "",
  });

   // Indikator
   const [fetchStatus, setFetchStatus] = useState(true);
   const [currentId, setCurrentId] = useState(-1);

  // Handling input
  const handleInput = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

 // Handling submit
 const handleSubmit = (event) => {
  event.preventDefault();

  const { id, name, description, category, release_year, size, price, rating, image_url, platform } = input;

  const requestData = {
    id,
    name,
    description,
    category,
    release_year,
    size,
    price,
    rating,
    image_url,
    platform,
  };

  if (currentId === -1) {
    axios
      .post('http://dwiagung.me/game', requestData, 
      { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        swal('Success', 'Data has been created!', 'success');
        setFetchStatus(true);
      })
      .catch((error) => {
        swal('Error', 'Failed to create data!', 'error');
      });
  } else {
    axios
      .patch(`http://dwiagung.me/game/${currentId}`, 
      requestData, { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        swal('Success', 'Data has been updated!', 'success');
        setFetchStatus(true);
      })
      .catch((error) => {
        swal('Error', 'Failed to update data!', 'error');
      })
      .then(() => {
        navigate('/dashboard/list-game');
      });
  }

  setCurrentId(-1);

  setInput({
    name: '',
    description: '',
    category: '',
    release_year: '',
    size: '',
    price: '',
    rating: '',
    image_url: '',
    platform: ''
  });
};

  /**
   * handle delete data
   * @param {*} event 
   */
  const handleDelete = (event) => {
  const idData = parseInt(event.target.value);

  swal({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover this data!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios
        .delete(`http://dwiagung.me/game/${idData}`, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((res) => {
          swal('Success', 'Data has been deleted!', 'success');
          setFetchStatus(true);
        })
        .catch((error) => {
          swal('Error', 'Failed to delete data!', 'error');
        });
    }
  });
};

  const handleEdit = (event) => {
  const idData = parseInt(event.target.value);

  setCurrentId(idData);

  axios
    .get(`http://dwiagung.me/game/${idData}`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    })
    .then((res) => {
      const data = res.data.data;

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
    })
    .catch((error) => {
      swal('Error', 'Failed to retrieve data!', 'error');
    });

    navigate(`dashboard/list-game/edit/${idData}`);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // let status = ["job_status_1", "job_status_0"];

    if (name === "job_status_1") {
      setInput({
        ...input,
        job_status_1: value,
        job_status_0: "",
        job_status: value,
      });
    } else if (name === "job_status_0") {
      setInput({
        ...input,
        job_status_0: value,
        job_status_1: "",
        job_status: value,
      });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  // Convert size from MB to GB
  const convertSize = (sizeInMB) => {
    if (!sizeInMB) {
      return '0 MB';
    }
  
    if (sizeInMB < 1024) {
      return sizeInMB + ' MB';
    } else {
      const sizeInGB = (sizeInMB / 1024).toFixed(2);
      return sizeInGB + ' GB';
    }
  };  

  /* Fungsi formatRupiah */
  function formatRupiah(angka, prefix) {
    if (angka === '0') {
      return 'Free';
    }
  
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
  
    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
  }

  // Render stars based on the rating
  function renderStars(rating) {
    const starCount = 5;
    const fullStar = '⭐';
    const emptyStar = '✩';

    let stars = '';
    for (let i = 1; i <= starCount; i++) {
      stars += i <= rating ? fullStar : emptyStar;
    }

    return stars;
  }

  const handleText = (text, max) => {
    if (text === null) {
      return '';
    } else if (text.length > 10) {
      return text.slice(0, max) + '...';
    } else {
      return text;
    }
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  };

  let handleFunctions = {
    handleEdit,
    handleChange,
    handleDelete,
    handleSubmit,
    handleInput,
    convertSize,
    formatRupiah,
    renderStars,
    handleText,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunctions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;