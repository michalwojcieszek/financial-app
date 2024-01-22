import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import SettingsPopupContainer from "./components/Settings/SettingsPopupContainer";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 9rem 1fr;
  position: relative;
`;

const Main = styled.main`
  max-width: 48rem;
  margin: 3rem auto;
  padding: 0 3rem;
`;

const StyledDiv = styled.div`
  height: 100dvh;
`;

function AppLayout() {
  return (
    <>
      <StyledLayout>
        <Header />
        <StyledDiv>
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </StyledDiv>
        <SettingsPopupContainer />
      </StyledLayout>
    </>
  );
}

export default AppLayout;
