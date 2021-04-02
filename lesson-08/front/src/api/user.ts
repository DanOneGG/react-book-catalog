import { ApiService } from "../services/ApiService";
import { User } from "../types/user";

export const apiUserCreate = async (params: User.Create.Param): Promise<User.Data> => {
  const { data } = await ApiService().post<User.Data>("/users/create", params);
  return data;
};
