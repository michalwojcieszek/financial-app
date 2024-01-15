import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";
import Selection from "../components/Selection";

function Dashboard() {
  const userData = useLoaderData();
  console.log(userData);

  const navigate = useNavigate();
  const { isAuthenticated } = useApp();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <>
      <Selection />
      <Outlet />
    </>
  );
}

export default Dashboard;
