import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export function logOut(toastMessage) {
  setIsAuthenticated(false);
  navigate("/");
  toast.success("You have successfully logged out");
}
