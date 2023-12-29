import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="min-h-screen dark:bg-background bg-slate-100 flex justify-center items-center">
        <div className="text-center space-y-8">
          <h1 className="text-8xl font-bold uppercase">404</h1>
          <h1 className="text-4xl font-bold uppercase">Ooops, Page not Found</h1>
          <Link to="/">
            <Button variant="link">Go Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
