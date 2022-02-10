import { useEffect, useState } from "react";
import { GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, getAuth } from "firebase/auth";
import axios from "axios";
import InitializeFirebase from "../firebase/firebaseInit";

InitializeFirebase()

const useFirebase = () => {
  const [role, setRole] = useState('user')
  const [user, setUser] = useState({})
  const auth = getAuth()
  const [isLoading, setLoading] = useState(true)
  const [adminLoad, setAdminLoad] = useState(true)
  const [error, setError] = useState('')


  // log out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
      setError('')
    }).catch((error) => {
    });
  }

  // create user
  const registerUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => {
        setLoading(false)
      })

  }

  // sign in with email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => {
        setLoading(false)
      })
  }
  // auth state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user)
        setLoading(false)
        setError('')
      } else {
        setLoading(false)
        setUser({})
        setError('')
      }
    });
  }, [])
  
  // check role

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://immense-harbor-44680.herokuapp.com/checkRole/${user.email}`)
        .then(res => {
          setRole(res)
          console.log(res);
          setAdminLoad(false)
        })
    }
  }, [user?.email])


  return {
    user,
    setUser,
    logOut,
    registerUser,
    auth,
    updateProfile,
    loginUser,
    isLoading,
    error,
    setError,
    setLoading,
    role,
    adminLoad,
  }
};

export default useFirebase;