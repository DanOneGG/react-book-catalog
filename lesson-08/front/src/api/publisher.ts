import { ApiService } from "../services/ApiService";
import { Publisher } from "../types/publisher";

export const apiPublisherGetAll = async (params: Publisher.All.Search): Promise<Publisher.Data[]> => {
  const { data } = await ApiService(true).get<Publisher.Data[]>("/publishers", { params });
  return data;
};

export const apiPublisherGetById = async (id: number): Promise<Publisher.Data> => {
  const { data } = await ApiService(true).get<Publisher.Data>(`/publishers/${id}`);
  return data;
};

export const apiPublisherCreate = async (params: Publisher.Create.Params): Promise<Publisher.Data> => {
  const { data } = await ApiService(true).post<Publisher.Data>(`/publishers`, params);
  return data;
};

export const apiPublisherUpdate = async (params: Publisher.Data): Promise<Publisher.Data> => {
  const { data } = await ApiService(true).put<Publisher.Data>(`/publishers/`, params);
  return data;
};
