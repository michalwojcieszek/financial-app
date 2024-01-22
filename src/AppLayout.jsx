import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import SettingsPopupContainer from "./components/Settings/SettingsPopupContainer";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 9rem 1fr auto;
  position: relative;
  height: 100vh;
`;

const Main = styled.main`
  max-width: 48rem;
  margin: 3rem auto;
  padding: 0 3rem;
`;

function AppLayout() {
  return (
    <>
      <StyledLayout>
        <Header />
        {/* <StyledDiv> */}
        <Main>
          <Outlet />
        </Main>
        {/* </StyledDiv> */}
        <Footer />
      </StyledLayout>
      <SettingsPopupContainer />
    </>
  );
}

export default AppLayout;
