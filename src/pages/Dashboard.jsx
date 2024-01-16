import { Outlet, useFetcher, useNavigate, useParams } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";
import Selection from "../components/Selection";
import styled from "styled-components";
import { getUserDataById } from "../hooks/apiFetching";

const StyledDashboardLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Dashboard() {
  // const fetcher = useFetcher();
  const navigate = useNavigate();
  const { isAuthenticated } = useApp();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  // useEffect(
  //   function () {
  //     if (!fetcher.data && fetcher.state === "idle")
  //       fetcher.load('"users/:id/:month"');
  //     console.log(fetcher);
  //   },
  //   [fetcher]
  // );

  //Outlet is Month or Year
  return (
    // <p>Hello, </p>
    <StyledDashboardLayoutDiv>
      <Selection />
      <Outlet />
    </StyledDashboardLayoutDiv>
  );
}

export default Dashboard;
