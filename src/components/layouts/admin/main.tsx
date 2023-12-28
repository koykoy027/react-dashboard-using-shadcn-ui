import NavBar from "./navbar";
import { Outlet } from "react-router-dom";
const Main: React.FC = () => {

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-screen-2xl p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
};

export default Main;