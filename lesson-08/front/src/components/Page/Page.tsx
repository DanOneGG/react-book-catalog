import React from "react";
import { Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";

interface Props {
  exact?: boolean;
  secured?: boolean;
  path: string;
  layout?: any;
  component: any;
}

export const Page: React.FC<Props> = ({
  secured = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
}) => {
  return (
    <Route exact={exact} path={path}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};
