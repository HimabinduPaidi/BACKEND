import { useEffect } from "react";
import useUserStore from "./store/useUserStore";
// import { getAccessToken } from "./utils/token.js";
import { Link, Outlet } from "react-router";
import api from "./utils/api";

function App(){
   const currentUser = useUserStore((state) => (state.user));
  const setUser = useUserStore((state) => (state.setUser))
  const getCurrentUser = async() => {
    try {
      const axiosResponse = await api.get("/users/me")
      console.log("HI",axiosResponse.data);
      setUser(axiosResponse.data.user.username);
      console.log(axiosResponse.data.user.username);
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return(
    <>
    <nav className="p-6 rounded-lg bg-rose-200 ">
      <Link to="/profile">My Profile</Link>
    </nav>
  
     <h1>{currentUser?.username} </h1>
    <Outlet />
    </>
  )
}

export default App;  