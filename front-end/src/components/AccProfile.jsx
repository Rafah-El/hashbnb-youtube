import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useUserContext} from '../contexts/UserContext'; 
import { useState } from "react";


const AccProfile = () => {
 const { user, setUser } = useUserContext();
 const [redirect, setRedirect] = useState(false);

   const logout = async () => {
     const { data } = await axios.post("/user/logout");
     console.log(data);
   };

   if (redirect) return <Navigate to="/" />;

   if (!user) return <></>;

  return (
    <div className='flex flex-col items-center gap-4'>
                    <p>Logado como{user.name} ({user.email})</p>

                <button onClick={logout} className='bg-primary-400 min-w-44 px-4 rounded-full py-2 cursor-pointer text-white transition'>
                Logout
                </button>
            </div>
  );
};

export default AccProfile;