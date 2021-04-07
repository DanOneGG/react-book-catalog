import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Page } from "../components/Page/Page";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";
import { AboutPage } from "./AboutPage/AboutPage";
import { AuthPage } from "./AuthPage/AuthPage";
import { CatalogPage } from "./CatalogPage/CatalogPage";
import { Error404 } from "./Error404/Error404";
import { AuthorsPage } from "./AuthorsPage/AuthorsPage";
import { PublishersPage } from "./PublishersPage/PublishersPage";
import { LanguagesPage } from "./LanguagesPage/LanguagesPage";
import { GenresPage } from "./GenresPage/GenresPage";
import { RefPage } from "./RefPage/RefPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={"/"} to={"/catalog"} />
      <Page unsecured onlyPublic path={"/auth"} layout={AuthLayout} component={AuthPage} />
      <Page unsecured onlyPublic path={"/registration"} layout={AuthLayout} component={RegisterPage} />
      <Page path={"/catalog"} component={CatalogPage} />
      <Page exact path={"/ref"} component={RefPage} />
      <Page path={"/ref/authors"} component={AuthorsPage} />
      <Page path={"/ref/genres"} component={GenresPage} />
      <Page path={"/ref/languages"} component={LanguagesPage} />
      <Page path={"/ref/publishers"} component={PublishersPage} />
      <Page path={"/about"} component={AboutPage} />
      <Page unsecured path={"*"} layout={AuthLayout} component={Error404} />
    </Switch>
  );
};
