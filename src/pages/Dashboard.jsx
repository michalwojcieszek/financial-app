import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";

function Dashboard() {
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
      <ul>
        <li>
          <NavLink to="january">January</NavLink>
        </li>
        <li>
          <NavLink to="february">February</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
