import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
  const [load, setLoad] = useState(false)
  const [page, setPage] = useState('login')
  const { loginUser, setUser,error, auth, setError, registerUser, updateProfile } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePage = () => {
    page === 'login' ? setPage('register') : setPage('login')
    setError('')
  }

  const navigate = useNavigate();

  const saveUserInfo = (data) => {
    axios.post('http://localhost:5000/saveUser', data)
      .then(res => setLoad(false))
  }

  const onSubmit = data => {
    // for login

    if (page === "login") {
      // email login
      setLoad(true)
      loginUser(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user)
          // save user to db
          const userInfo = {
            name: user.displayName,
            email: user.email
          }
          saveUserInfo(userInfo)
          window.alert('success fully login')
          navigate('/')
          // redirect to location
        })
        .catch((error) => {
          setError(error.message)
          setLoad(false)
        });

      // for register
    } else if (page === 'register') {

      if (data.password === data.confirmPassword) {
        setLoad(true)
        // creat account
        registerUser(data.email, data.password, data.name)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            // set user name
            updateProfile(auth.currentUser, {
              displayName: data.name
            }).then(() => {
              //save user to db
              saveUserInfo({ name: data.name, email: data.email })
              window.alert(' Registration Success')
              togglePage('login')
            }).catch((error) => {
              setLoad(false)
              setError(error.message)
            });
          })
          .catch((error) => {
            setLoad(false)
            setError(error.message)
          })
      } else {
        setError("Password did not matched")
      }
    }
  }
  return (
    <div className='text-center mt-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {page === 'register' && <>
          <input placeholder='Name' {...register("name", { required: true })} /> <br />
          {errors.name && <span>This field is required</span>}<br />
        </>}

        <input placeholder='Email' type='email' {...register("email", { required: true })} /> <br />
        {errors.email && <span>This field is required</span>}<br />

        <input placeholder='Password' {...register("password", { required: true })} /> <br />
        {errors.password && <span>This field is required</span>}<br />

        {page === 'register' && <>
          <input placeholder='Confirm Password' {...register("confirmPassword", { required: true })} /> <br />
          {errors.confirmPassword && <span>This field is required</span>}<br />
        </>}
        <input type="submit" />

        {page === 'register' ? <>
          <p onClick={() => togglePage('register')}>Login</p>
        </> :
          <p onClick={() => togglePage('login')}>Create Account</p>
        }
      </form>
      <p>{error}</p>
    </div>
  );
};

export default Login;

