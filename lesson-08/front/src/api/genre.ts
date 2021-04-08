import { ApiService } from "../services/ApiService";
import { Genre } from "../types/genre";

export const apiGenreGetAll = async (): Promise<Genre.Data[]> => {
  const { data } = await ApiService(true).get<Genre.Data[]>("/genres");
  return data;
};
