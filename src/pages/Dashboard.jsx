import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";
import { getUserDataLoader } from "../hooks/apiFetching";
import styled from "styled-components";

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
    <div>
      <label for="select-view">Choose the period</label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  );
}

export async function loader({ params }) {
  const userData = await getUserDataLoader(params.id);
  return userData;
}

export default Dashboard;
