import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_SERVER_URL;

export const useSignup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${url}/user/signup`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      navigate("/admin/AdminDashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  return { signup, isLoading, error };
};
