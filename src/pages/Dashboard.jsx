import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";
import { getUserDataLoader } from "../hooks/apiFetching";
import styled from "styled-components";
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
    </>
  );
}

export async function loader({ params }) {
  const userData = await getUserDataLoader(params.id);
  return userData;
}

export default Dashboard;
