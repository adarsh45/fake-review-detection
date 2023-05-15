import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Container from "./components/Container";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Reviews from "./pages/Reviews";

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
      <Container>
        <Reviews />
      </Container>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
