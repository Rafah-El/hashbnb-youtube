import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

const Header = () => {
  const {user} = useUserContext();

  return (
    <div className="shadow-md">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to={user ? "/account" : '/login'} className="flex items-center">
          <img 
            className="h-10"
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp" 
            alt="Logo da Hashtag" 
          />
          <p className="text-2xl font-bold text-primary-400">ashbnb</p>  
        </Link>

        {/* Barra de busca central */}
        <Link to='/' className="flex items-center border border-gray-300 py-2 pr-4 pl-6 rounded-full shadow-md">
          <p className="border-r border-r-gray-300 pr-4">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 px-4">Qualquer semana</p>
          <p className="px-4">Hóspedes</p>

          <div className="bg-primary-400 rounded-full p-2 text-white">
            {/* Ícone lupa */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
              className="w-4 h-4"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 
                   5.196 5.196a7.5 7.5 0 0 0 
                   10.607 10.607Z" 
              />
            </svg>
          </div>
        </Link>

        {/* Menu + Perfil + Nome */}
        <Link to={user ? "/account/profile" : "/login"}className="flex items-center gap-2 border border-gray-300 rounded-full shadow-md py-2 px-4">
          
          {/* Ícone de menu */}
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" fill="currentColor" 
            className="w-6 h-6 cursor-pointer text-gray-600">
            <path
              fillRule="evenodd" 
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 
              3 6.75ZM3 12a.75.75 0 0 1 
              .75-.75h16.5a.75.75 0 0 1 0 
              1.5H3.75A.75.75 0 0 1 
              3 12Zm0 5.25a.75.75 0 0 1 
              .75-.75h16.5a.75.75 0 0 1 0 
              1.5H3.75a.75.75 0 0 1-.75-.75Z" 
              clipRule="evenodd" 
            />
          </svg>

          {/* Ícone de perfil */}
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" fill="currentColor" 
            className="w-8 h-8 text-gray-600">
            <path 
              fillRule="evenodd" 
              d="M18.685 19.097A9.723 9.723 0 0 
              0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 
              6.615 2.25 12a9.723 9.723 0 0 0 3.065 
              7.097A9.716 9.716 0 0 0 12 
              21.75a9.716 9.716 0 0 0 
              6.685-2.653Zm-12.54-1.285A7.486 
              7.486 0 0 1 12 15a7.486 7.486 
              0 0 1 5.855 2.812A8.224 8.224 
              0 0 1 12 20.25a8.224 8.224 0 
              0 1-5.855-2.438ZM15.75 9a3.75 
              3.75 0 1 1-7.5 0 3.75 3.75 0 
              1 1 7.5 0Z" 
              clipRule="evenodd" 
            />
          </svg>

          {/* Nome do usuário */}
          {user ? <p className="text-gray-700 font-medium max-w-20 truncate sm:max-w-32">{user.name}</p> : <></>}
          
        </Link>
      </div>
    </div>
  ); 
};

export default Header;