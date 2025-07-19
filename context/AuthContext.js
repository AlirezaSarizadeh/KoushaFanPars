// this is unsuable

'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  // const login = async (phone, password) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('phone', phone);
  //     formData.append('password', password);

  //     const response = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       setUser(data.user);
  //       router.push('/dashboard');
  //     } else {
  //       throw new Error(data.message || 'Login failed');
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     throw error;
  //   }
  // };

  const register = async (formdata) => {

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    try {
      fetch("https://api.kfp-dental.com/api/register", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      // const data = await response.text();
      // if (data) {
      //   setUser(data.user);
      //   router.push('/dashboard');
      //   setLoading(false)
      // } else {
      //   throw new Error(data.message || 'Registration failed aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      // }
    } catch (error) {
      console.error('Registration error:aaaaaaaaaaaaaaaaaaaaaaa', error); // Fixed syntax error
      throw error;
    }
  };

  // const logout = async () => {
  //   try {
  //     const response = await fetch('/api/auth/logout', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       setUser(null);
  //       router.push('/login');
  //     }
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //   }
  // };

  return (
    <AuthContext.Provider value={{ user, loading, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};