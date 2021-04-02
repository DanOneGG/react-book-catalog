import { ApiService } from "../services/ApiService";
import { Language } from "../types/language";

export const apiLanguageGetAll = async (): Promise<Language.Data[]> => {
  const { data } = await ApiService(true).get<Language.Data[]>("/languages");
  return data;
};
