import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};
