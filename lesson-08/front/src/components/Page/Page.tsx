import React from "react";
import { Redirect, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { connect, MapStateToProps } from "react-redux";
import { checkAccessToken } from "../../utils";
import { RootState } from "../../store/types";

interface StateProps {
  isAuth: boolean;
}

interface OwnProps {
  exact?: boolean;
  unsecured?: boolean;
  path: string;
  layout?: any;
  component: any;
}

type Props = OwnProps & StateProps;

const PagePresenter: React.FC<Props> = ({
  unsecured = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
  isAuth,
}) => {
  if (!unsecured && !isAuth) {
    return <Redirect to={"/auth"} />;
  }

  return (
    <Route exact={exact} path={path}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  isAuth: checkAccessToken(app.accessToken),
});

export const Page = connect(mapStateToProps)(PagePresenter);
