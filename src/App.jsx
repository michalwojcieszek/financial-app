import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";
import { AppProvider } from "./contexts/AppContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="login" element={<Login />} />
              <Route path="users/:id" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
