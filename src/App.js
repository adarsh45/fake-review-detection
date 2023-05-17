import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Container from "./components/Container";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Reviews from "./pages/Reviews";
import Analysis from "./pages/analysis/Analysis";
import { ToastContainer } from "react-toastify";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Landing />
      </Container>
    ),
  },
  {
    path: "/register",
    element: (
      <Container>
        <Register />
      </Container>
    ),
  },
  {
    path: "/login",
    element: (
      <Container>
        <Login />
      </Container>
    ),
  },
  {
    path: "/reviews",
    element: (
      <PrivateRoute>
        <Container>
          <Reviews />
        </Container>
      </PrivateRoute>
    ),
  },
  {
    path: "/analysis",
    element: (
      <PrivateRoute>
        <Container>
          <Analysis />
        </Container>
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <Container>
        <About />
      </Container>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
