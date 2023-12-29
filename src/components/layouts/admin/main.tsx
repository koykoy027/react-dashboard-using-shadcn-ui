import NavBar from "./navbar";
import { Outlet } from "react-router-dom";
const Main: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="container py-10">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
