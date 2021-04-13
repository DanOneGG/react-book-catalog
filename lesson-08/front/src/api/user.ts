import { ApiService } from "../services/ApiService";
import { User } from "../types/user";
import { AxiosError } from "axios";
import { App } from "../types/app";

export const apiUserCreate = async (params: User.Create.Params): Promise<User.Data | never> => {
  try {
    const { data } = await ApiService().post<User.Data>("/users/create", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
