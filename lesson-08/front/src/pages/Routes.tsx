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

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={"/"} to={"/catalog"} />
      <Page path={"/auth"} layout={AuthLayout} component={AuthPage} />
      <Page secured path={"/catalog"} component={CatalogPage} />
      <Page exact secured path={"/ref"} component={RefPage} />
      <Page secured path={"/ref/authors"} component={AuthorsPage} />
      <Page secured path={"/ref/genres"} component={GenresPage} />
      <Page secured path={"/ref/languages"} component={LanguagesPage} />
      <Page secured path={"/ref/publishers"} component={PublishersPage} />
      <Page secured path={"/about"} component={AboutPage} />
      <Page path={"*"} layout={AuthLayout} component={Error404} />
    </Switch>
  );
};
