import { ApiService } from "../services/ApiService";
import { Book } from "../types/book";

export const apiBookGetAll = async (): Promise<Book.Data[]> => {
  const { data } = await ApiService(true).get<Book.Data[]>("/books");
  return data;
};
