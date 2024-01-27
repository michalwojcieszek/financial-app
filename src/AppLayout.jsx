import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import SettingsPopupContainer from "./components/Settings/SettingsPopupContainer";
import Spinner from "./ui/Spinner";
import { LoginProvider } from "./contexts/LoginContext";
import { useGlobal } from "./contexts/GlobalContext";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 9rem 1fr auto;
  position: relative;
  height: 100vh;
`;

const Main = styled.main`
  /* width: 54rem; */
  max-width: 54rem;
  margin: auto;
  padding: 0 3rem;

  @media (max-width: 540px) {
    /* padding: 0 0.5rem; //Adjust padding for screens under 540px width */
    max-width: 38rem;
  }
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoadingNavState = navigation.state === "loading";
  const { isLoading } = useGlobal();
  console.log(isLoading);

  return (
    <>
      <StyledLayout>
        <Header />
        <Main>
          <LoginProvider>
            {(isLoading || isLoadingNavState) && <Spinner />}
            {!isLoading && !isLoadingNavState && <Outlet />}
          </LoginProvider>
        </Main>
        <Footer />
      </StyledLayout>
      <SettingsPopupContainer />
    </>
  );
}

export default AppLayout;
