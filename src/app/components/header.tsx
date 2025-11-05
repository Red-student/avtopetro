"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <div className="flex items-center gap-2 group">
      {/* Кастомный логотип с градиентом */}
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/70">
          {/* Иконка автомобиля */}
          <svg 
            className="w-7 h-7 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        </div>
        {/* Блестящий эффект */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {/* Текст логотипа */}
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          AvtoPetro
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
          Автомобили
        </span>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <Navbar 
      className="border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm"
      maxWidth="full"
      height="80px"
    >
      <NavbarBrand className="gap-3">
        <AcmeLogo />
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link 
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group"
          >
            Услуги
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link 
            aria-current="page" 
            href="#"
            className="text-blue-600 dark:text-blue-400 font-semibold relative group"
          >
            Автомобили
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group"
          >
            О нас
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group"
          >
            Контакты
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden lg:flex">
          <Button 
            as={Link} 
            href="#"
            variant="light"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
          >
            Войти
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            href="#"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
