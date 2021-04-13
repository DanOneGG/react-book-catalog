import { container } from "tsyringe";
import { Repository } from "../enum/repository";
import { NotFoundError } from "../error/NotFoundError";
import {
  schemaLanguageCreate,
  schemaLanguageList,
  schemaLanguageUpdate,
  schemaLanguageValidateId,
} from "../schema/language";
import { App } from "../types/app";
import { Language } from "../types/language";

const languageRepository = container.resolve<Language.Repository>(Repository.Language);

export const languageGetAll: App.Action<Language.List.Request> = async (req, res) => {
  await schemaLanguageList.validate(req.query);
  const { search = "" } = req.query;

  const languages = search ? await languageRepository.search(search) : await languageRepository.getAll();

  res.json(languages);
};

export const languageGetById: App.Action<Language.Single.Request> = async (req, res) => {
  const language = await languageRepository.getById(req.params.id);

  res.json(language);
};

export const languageCreate: App.Action<Language.Create.Request> = async (req, res) => {
  await schemaLanguageCreate.validate(req.body);

  const language = await languageRepository.create(req.body);

  res.status(201).json(language);
};

export const languageUpdate: App.Action<Language.Update.Request> = async (req, res) => {
  await schemaLanguageUpdate.validate(req.body);

  const languageSrc = await languageRepository.getById(req.body.id);

  if (!languageSrc) {
    throw new NotFoundError();
  }

  const language = await languageRepository.update(languageSrc.id, req.body);

  res.json(language);
};

export const languageDelete: App.Action<Language.Delete.Request> = async (req, res) => {
  await schemaLanguageValidateId.validate(req.params);

  const language = await languageRepository.getById(req.params.id);

  if (!language) {
    throw new NotFoundError();
  }

  await languageRepository.delete(language);

  res.status(204).json();
};
