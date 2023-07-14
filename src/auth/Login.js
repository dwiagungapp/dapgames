import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Login = () => {

    let navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    let { email, password } = input;
    axios
      .post('http://dwiagung.me/client/login', {
        email,
        password,
      })
      .then((res) => {
        let { data } = res;
        Cookies.set('token', data.token, { expires: 1 });
        Cookies.set('name', data.user.name, { expires: 1 });
        Cookies.set('email', data.user.email, { expires: 1 });
        Cookies.set('image_url', data.user.image_url, { expires: 1 });
  
        Swal.fire('Success', 'Login berhasil', 'success').then(() => {
          navigate('/dashboard');
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Error', 'Login gagal', 'error');
      });
  
    setInput({
      email: '',
      password: '',
    });
  };
  
  return (
    <>
   <div className="font-poppins flex items-center justify-center min-h-screen bg-gray-100">
  <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
    <h3 className="text-2xl font-bold text-center">Login</h3>
    <form onSubmit={handleLogin} method="POST">
      <div className="mt-4">
        <div>
          <label className="block" htmlFor="Email">
            Email
          </label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF8F00]"
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="email">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF8F00]"
          />
        </div>
        <div className="flex">
        <motion.button className="w-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} >
          <button className="w-full px-6 py-2 mt-4 text-white bg-[#FF8F00] rounded-lg hover:bg-opacity-75">
            Login
          </button>
          </motion.button>
        </div>
        <div className="mt-6 text-grey-dark">
          Not have an account?
          <a className="ml-2 text-[#FF8F00] hover:underline" href="/register">
            Register
          </a>
        </div>
      </div>
    </form>
  </div>
</div>
    </>
  );
};
export default Login;