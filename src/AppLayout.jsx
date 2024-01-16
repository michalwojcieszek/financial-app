import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 9rem 1fr;
`;

const StyledDiv = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 3rem;
`;

const StyledMain = styled.main`
  /* background-color: green; */
  height: 100dvh;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>
        <StyledDiv>
          <Outlet />
        </StyledDiv>
      </StyledMain>
      <Footer />
    </StyledLayout>
  );
}

export default AppLayout;
