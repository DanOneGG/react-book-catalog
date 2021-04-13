import { Request as RequestExpress } from "express";
import { DeepPartial } from "typeorm";
import { GenreEntity } from "../entity/GenreEntity";
import { App } from "./app";
import { LanguageEntity } from "../entity/LanguageEntity";

export declare namespace Genre {
  interface Repository {
    getAll(): Promise<GenreEntity[]>;

    getById(genreId: number | string): Promise<GenreEntity | undefined>;

    create(genreData: DeepPartial<GenreEntity>): Promise<GenreEntity>;

    update(genreId: number | string, genreData: DeepPartial<GenreEntity>): Promise<GenreEntity>;

    delete(genre: GenreEntity): Promise<void>;

    search(value: string): Promise<GenreEntity[]>;

    hasExist(name: string): Promise<boolean>;
  }

  namespace List {
    interface Query {
      search?: string;
    }

    type Request = RequestExpress<null, null, null, Query & App.ParsedQs>;
  }

  namespace Create {
    interface Body {
      name: string;
    }

    type Request = RequestExpress<null, null, Body>;
  }

  namespace Update {
    interface Body {
      id: number;
      name: string;
    }

    type Request = RequestExpress<null, null, Body>;
  }

  namespace Delete {
    interface Params {
      id: number;
    }

    type Request = RequestExpress<Params & App.ParamsDictionary, null, null>;
  }

  namespace Single {
    interface Params {
      id: number;
    }

    type Request = RequestExpress<Params & App.ParamsDictionary, null, null>;
  }
}
