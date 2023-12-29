import { ChevronsRight } from "lucide-react";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="inline-flex items-center capitalize">
      <Link to="/" className="border-l border-primary pl-2 ml-2">Dashboard</Link>
      {
        <>
          <ChevronsRight className="w-4 h-4" />
        </>
      }

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const decodedName = decodeURIComponent(name); // Decode the segment
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={decodedName}>{decodedName}</span>
        ) : (
          <span key={decodedName} className="inline-flex items-center capitalize">
            <Link to={routeTo}>{decodedName}</Link>{"  "}
            {
              <>
                <ChevronsRight className="w-4 h-4" />
              </>
            }
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
