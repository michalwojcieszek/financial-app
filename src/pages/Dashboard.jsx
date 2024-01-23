import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Selection from "../components/Selection";
import { useGlobal } from "../contexts/GlobalContext";
import { AddExpenseProvider } from "../contexts/AddExpenseContext";

const StyledDashboardLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
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
      <AddExpenseProvider>
        <Selection />
        <Outlet />
      </AddExpenseProvider>
    </StyledDashboardLayoutDiv>
  );
}

export default Dashboard;
