import { ApiService } from "../services/ApiService";
import { Author } from "../types/author";

export const apiAuthorGetAll = async (): Promise<Author.Data[]> => {
  const { data } = await ApiService(true).get<Author.Data[]>("/authors");
  return data;
};

export const apiAuthorGetById = async (id: number): Promise<Author.Data> => {
  const { data } = await ApiService(true).get<Author.Data>(`/authors/${id}`);
  return data;
};

export const apiAuthorCreate = async (params: Author.Create.Params): Promise<Author.Data> => {
  const { data } = await ApiService(true).post<Author.Data>(`/authors`, params);
  return data;
};

export const apiAuthorUpdate = async (params: Author.Data): Promise<Author.Data> => {
  const { data } = await ApiService(true).put<Author.Data>(`/authors/`, params);
  return data;
};
