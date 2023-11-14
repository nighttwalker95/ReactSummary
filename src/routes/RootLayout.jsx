import { Fragment } from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <MainHeader />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
