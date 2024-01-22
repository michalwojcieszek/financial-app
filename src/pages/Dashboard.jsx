import { Outlet, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { useEffect } from "react";
import styled from "styled-components";

const StyledDashboardLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

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
    <StyledDashboardLayoutDiv>
      <Outlet />
    </StyledDashboardLayoutDiv>
  );
}

export default Dashboard;
