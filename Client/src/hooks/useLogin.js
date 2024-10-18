import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
      console.log("Attempting login for:", username);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      console.log("Login response:", data);
      
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      console.log("Login successful, user set in context");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message);
      throw error; // Re-throw the error so it can be caught in the component
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;


// function handleInputErrors(
//     username,
//     password,
//   ) {
//     if ( !username || !password ) {
//       toast.error("please fill in all fields");
//       return false;
//     }
  
//     if (password ) {
//      toast.error("passwords do not match");
//       return false;
//     }
  
//     return true;
//   }