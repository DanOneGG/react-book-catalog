import { ApiService } from "../services/ApiService";
import { Book } from "../types/book";

export const apiBookGetAll = async (params: Book.All.Search): Promise<Book.Data[]> => {
  const { data } = await ApiService(true).get<Book.Data[]>("/books", { params });
  return data;
};

export const apiBookGetById = async (id: number): Promise<Book.Data> => {
  const { data } = await ApiService(true).get<Book.Data>(`/books/${id}`);
  return data;
};

export const apiBookCreate = async (params: Book.Create.Params): Promise<Book.Data> => {
  const { data } = await ApiService(true).post<Book.Data>(`/books`, params);
  return data;
};

export const apiBookUpdate = async (params: Book.Data): Promise<Book.Data> => {
  const { data } = await ApiService(true).put<Book.Data>(`/books/`, params);
  return data;
};
