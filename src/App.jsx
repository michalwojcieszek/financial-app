import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import Month from "./pages/Month";
import { userLoader } from "./hooks/RouterLoaders/userLoader";
import Settings from "./pages/Settings";
import Year from "./components/yearStats/Year";
import { userCurrenciesLoader } from "./hooks/RouterLoaders/userCurrenciesLoader";
import { GlobalProvider } from "./contexts/GlobalContext";
import Error from "./pages/Error";

//---------------------------------------- MY TRY
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        element: <Dashboard />,
        children: [
          {
            path: "users/:id/:month",
            element: <Month />,
            loader: userLoader,
            // errorElement: <Error />,
          },
          {
            path: "users/:id",
            element: <Year />,
            loader: userLoader,
            // errorElement: <Error />,
          },
        ],
      },
      {
        path: "users/:id/settings",
        element: <Settings />,
        loader: userCurrenciesLoader,
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOption={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "300px",
              padding: "16px 24px",
            },
          }}
        />
      </GlobalProvider>
    </>
  );
}
export default App;

// -------------------- OLD WAY
//   return (
//     <>
//       <AppProvider>
//         <GlobalStyles />
//         <BrowserRouter>
//           <Routes>
//             <Route element={<AppLayout />}>
//               <Route index element={<Login />} />
//               <Route path="users/:id" element={<Dashboard />} />
//             </Route>
//             <Route element={<AppLayout />}>
//               <Route path="users/:id/:month" element={<Month />} />
//             </Route>
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </BrowserRouter>
//         <Toaster
//           position="top-center"
//           gutter={12}
//           containerStyle={{ margin: "8px" }}
//           toastOption={{
//             success: {
//               duration: 3000,
//             },
//             error: {
//               duration: 5000,
//             },
//             style: {
//               fontSize: "16px",
//               maxWidth: "500px",
//               padding: "16px 24px",
//             },
//           }}
//         />
//       </AppProvider>
//     </>
//   );
// }

// export default App;
