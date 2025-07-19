'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // const login = (userData) => {
  //   setUser(userData);
  //   setIsLoggedIn(true);
  //   localStorage.setItem('user', JSON.stringify(userData));
  // };


  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));

    // Store a cookie that middleware can read
    document.cookie = `token=${userData.token}; path=/`;
  };


  // const logout = () => {
  //   setUser(null);
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('user');
  //   // localStorage.removeItem('rememberMe');
  // };
  
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');

    // Remove token cookie
    document.cookie = 'token=; Max-Age=0; path=/';
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};