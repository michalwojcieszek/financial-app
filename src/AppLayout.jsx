import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import SettingsPopupContainer from "./components/Settings/SettingsPopupContainer";
import Spinner from "./ui/Spinner";
import { LoginProvider } from "./contexts/LoginContext";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 9rem 1fr auto;
  position: relative;
  height: 100vh;
`;

const Main = styled.main`
  max-width: 52rem;
  margin: 3rem auto;
  padding: 0 3rem;
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <StyledLayout>
        <Header />
        <LoginProvider>
          <Main>
            {isLoading && <Spinner />}
            {!isLoading && <Outlet />}
          </Main>
        </LoginProvider>
        <Footer />
      </StyledLayout>
      <SettingsPopupContainer />
    </>
  );
}

export default AppLayout;
