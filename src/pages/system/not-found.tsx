import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen dark:bg-background bg-slate-100">
        <div className="space-y-8 text-center">
          <h1 className="font-bold uppercase text-8xl">404</h1>
          <h1 className="text-4xl font-bold uppercase">
            Ooops, Page not Found
          </h1>
          <Link to="/">
            <Button variant="link">Go Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
