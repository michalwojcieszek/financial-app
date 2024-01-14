import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";
import { AppProvider } from "./contexts/AppContext";

function App() {
  //a
  return (
    <>
      <AppProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
