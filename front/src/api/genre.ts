import { ApiService } from "../services/ApiService";
import { Genre } from "../types/genre";

export const apiGenreGetAll = async (params: Genre.All.Search): Promise<Genre.Data[]> => {
  const { data } = await ApiService(true).get<Genre.Data[]>("/genres", { params });
  return data;
};

export const apiGenreGetById = async (id: number): Promise<Genre.Data> => {
  const { data } = await ApiService(true).get<Genre.Data>(`/genres/${id}`);
  return data;
};

export const apiGenreCreate = async (params: Genre.Create.Params): Promise<Genre.Data> => {
  const { data } = await ApiService(true).post<Genre.Data>(`/genres`, params);
  return data;
};

export const apiGenreUpdate = async (params: Genre.Data): Promise<Genre.Data> => {
  const { data } = await ApiService(true).put<Genre.Data>(`/genres/`, params);
  return data;
};
