"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import ToursAdminDashboard from "../../components/ToursAdminDashboard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is logged in via localStorage
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("adminLoginStatus");
      const loginExpiry = localStorage.getItem("adminLoginExpiry");
      
      if (loginStatus === "true" && loginExpiry && new Date().getTime() < parseInt(loginExpiry)) {
        setIsLoggedIn(true);
      }
      
      setIsLoading(false);
    };
    
    checkLoginStatus();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      // Check credentials against the login table
      const { data, error } = await supabase
        .from("login")
        .select("*")
        .eq("username", loginData.username)
        .eq("password", loginData.password)
        .single();
        
      if (error || !data) {
        throw new Error("Invalid username or password");
      }
      
      // Set login status in localStorage with 24 hour expiry
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
      localStorage.setItem("adminLoginStatus", "true");
      localStorage.setItem("adminLoginExpiry", expiryTime.toString());
      
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoginStatus");
    localStorage.removeItem("adminLoginExpiry");
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center text-gray-800 min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed top-12 left-0 right-0 bg-blue-600 text-white mt-4 p-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Tours Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <ToursAdminDashboard />
    </div>
  );
};

export default AdminPage;