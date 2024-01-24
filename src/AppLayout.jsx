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
  width: 52rem;
  margin: auto;
  padding: 0 3rem;
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
        <LoginProvider>
          <Main>
            {(isLoading || isLoadingNavState) && <Spinner />}
            {!isLoading && !isLoadingNavState && <Outlet />}
          </Main>
        </LoginProvider>
        <Footer />
      </StyledLayout>
      <SettingsPopupContainer />
    </>
  );
}

export default AppLayout;
