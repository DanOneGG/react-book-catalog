import { ApiService } from "../services/ApiService";
import { Author } from "../types/author";

export const apiAuthorGetAll = async (): Promise<Author.Data[]> => {
  const { data } = await ApiService(true).get<Author.Data[]>("/authors");
  return data;
};
