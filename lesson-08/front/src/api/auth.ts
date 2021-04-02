import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { Auth } from "../types/auth";

export const apiAuthLogin = async (params: Auth.Login.Params): Promise<App.Token> => {
  const { data } = await ApiService().post<App.Token>("/auth/login", params);
  return data;
};

// export const apiAuthRefresh = async (params: Auth.Refresh.Params): Promise<App.Token> => {
//   const { data } = await ApiService().post<App.Token>('/api/v1/auth/refresh', params)
//   return data
// }

export const apiAuthLogout = async (): Promise<App.Token> => {
  const { data } = await ApiService(true).post<App.Token>("/auth/refresh");
  return data;
};
