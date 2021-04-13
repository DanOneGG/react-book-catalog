import React from "react";
import { Redirect, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { connect, MapStateToProps } from "react-redux";
import { checkAccessToken } from "../../utils";
import { RootState } from "../../store/types";
import { BaseLayoutProps, BasePageProps } from "../../types/base";

interface StateProps {
  isAuth: boolean;
}

interface OwnProps {
  exact?: boolean;
  unsecured?: boolean;
  onlyPublic?: boolean;
  path: string;
  layout?: React.FC<BaseLayoutProps>;
  component: React.FC<BasePageProps<any>>;
}

type Props = OwnProps & StateProps;

const PagePresenter: React.FC<Props> = ({
  unsecured = false,
  onlyPublic = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
  isAuth,
}) => {
  if (onlyPublic && isAuth) {
    return <Redirect to={"/"} />;
  }

  if (!unsecured && !isAuth) {
    return <Redirect to={"/auth"} />;
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  isAuth: checkAccessToken(app.accessToken),
});

export const Page = connect(mapStateToProps)(PagePresenter);
