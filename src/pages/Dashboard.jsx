import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Selection from "../components/Selection";
import { useGlobal } from "../contexts/GlobalContext";

const StyledDashboardLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useGlobal();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <StyledDashboardLayoutDiv>
      <Selection />
      <Outlet />
    </StyledDashboardLayoutDiv>
  );
}

export default Dashboard;
