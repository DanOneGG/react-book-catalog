import axios from "axios";
import { User } from "../types/user";

export const apiUserCreate = async (params: User.Create.Param): Promise<User.Data> => {
  const { data } = await axios.post<User.Data>("/api/v1/users/create", params);
  return data;
};
