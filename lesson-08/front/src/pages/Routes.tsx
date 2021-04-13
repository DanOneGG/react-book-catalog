import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Page } from "../components/Page/Page";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";
import { AboutPage } from "./AboutPage/AboutPage";
import { AuthPage } from "./AuthPage/AuthPage";
import { CatalogPage } from "./CatalogPage/CatalogPage";
import { Error404 } from "./Error404/Error404";
import { AuthorAllPage } from "./AuthorAllPage/AuthorAllPage";
import { PublisherAllPage } from "./PublisherAllPage/PublisherAllPage";
import { LanguageAllPage } from "./LanguageAllPage/LanguageAllPage";
import { GenreAllPage } from "./GenreAllPage/GenreAllPage";
import { RefPage } from "./RefPage/RefPage";
import { RegistrationPage } from "./RegistrationPage/RegistrationPage";
import { LanguagePage } from "./LanguagePage/LanguagePage";
import { LanguageEditPage } from "./LanguageEditPage/LanguageEditPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { PublisherPage } from "./PublisherPage/PublisherPage";
import { GenrePage } from "./GenrePage/GenrePage";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={"/"} to={"/catalog"} />
      <Page unsecured onlyPublic path={"/auth"} layout={AuthLayout} component={AuthPage} />
      <Page unsecured onlyPublic path={"/registration"} layout={AuthLayout} component={RegistrationPage} />
      <Page path={"/catalog"} component={CatalogPage} />
      <Page path={"/about"} component={AboutPage} />
      <Page exact path={"/ref"} component={RefPage} />

      <Page exact path={"/ref/authors"} component={AuthorAllPage} />
      {/*<Page exact path={'/ref/authors/create'} component={AuthorEditPage} />*/}
      <Page exact path={"/ref/authors/:id"} component={AuthorPage} />
      {/*<Page exact path={'/ref/authors/:id/edit'} component={AuthorEditPage} />*/}

      <Page exact path={"/ref/genres"} component={GenreAllPage} />
      {/*<Page exact path={'/ref/genres/create'} component={GenreEditPage} />*/}
      <Page exact path={"/ref/genres/:id"} component={GenrePage} />
      {/*<Page exact path={'/ref/genres/:id/edit'} component={GenreEditPage} />*/}

      <Page exact path={"/ref/languages"} component={LanguageAllPage} />
      <Page exact path={"/ref/languages/create"} component={LanguageEditPage} />
      <Page exact path={"/ref/languages/:id"} component={LanguagePage} />
      {/*<Page exact path={'/ref/languages/:id/edit'} component={LanguageEditPage} />*/}

      <Page exact path={"/ref/publishers"} component={PublisherAllPage} />
      {/*<Page exact path={'/ref/publishers/create'} component={PublisherEditPage} />*/}
      <Page exact path={"/ref/publishers/:id"} component={PublisherPage} />
      {/*<Page exact path={'/ref/publishers/:id/edit'} component={PublisherEditPage} />*/}
      <Page unsecured path={"*"} layout={AuthLayout} component={Error404} />
    </Switch>
  );
};
