import { container } from "tsyringe";
import * as Yup from "yup";
import { Repository } from "../enum/repository";
import { Language } from "../types/language";
import { Author } from "../types/author";

const languageRepository = container.resolve<Language.Repository>(Repository.Language);

const uniqueName = async (name) => !(await languageRepository.hasExist(name));

export const schemaLanguageList: Yup.SchemaOf<Language.List.Query> = Yup.object().shape({
  search: Yup.string(),
});

export const schemaLanguageCreate: Yup.SchemaOf<Language.Create.Body> = Yup.object().shape({
  name: Yup.string().required().test("unique", "name must be unique", uniqueName),
});

export const schemaLanguageUpdate: Yup.SchemaOf<Language.Update.Body> = Yup.object().shape({
  id: Yup.number().min(1).required(),
  name: Yup.string().required().test("unique", "name must be unique", uniqueName),
});

export const schemaLanguageValidateId: Yup.SchemaOf<
  Language.Delete.Params | Language.Single.Params
> = Yup.object().shape({
  id: Yup.number().min(1).required(),
});
