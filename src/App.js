import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Siteroutes from "./components/Siteroutes";
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react";
import UserContext from "./UserContext";
import AdminHeader from "./components/AdminHeader";
import First from "./components/First";
function App() {
  const [user,setUser] = useState(null);
  const [utype, setutype] = useState("guest");
  useEffect(()=>
  {
    if(sessionStorage.getItem("userinfo")!==null)
    {
      setUser(JSON.parse(sessionStorage.getItem("userinfo")));
    }
  },[])
  useEffect(()=>
  {
    if(user)
    {
      if(user.usertype==="admin")
      {
        setutype("admin");
      }
      else if(user.usertype==="normal")
      {
        setutype("normal");
      }
    }
    else
    {
      setutype("guest");
    }
  },[user])
  return (
    <>
      <ToastContainer
        position="bottom-right"
       
        theme="colored" />
      <First/>
      <UserContext.Provider value={{ user, setUser}}>
      {
          utype==="admin"?
          <AdminHeader/>:
          <Header />
        }
        <Siteroutes/>
        <Footer/>
      </UserContext.Provider>
    </>
  );
}

export default App;
