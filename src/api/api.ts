import axios, { AxiosResponse } from "axios";
import { UserType } from "../types/types";
// * as убрал
export type ApiResponceType<D ={},RC=ResultCodeEnum> ={
  // D ={} --по умолчанию пустой объект
  data:D
  messages:Array<string>
  resultCode:RC
}

export const instance = axios.create({
  withCredentials: true,/* передать куку*/
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "66060485-250e-40e6-994f-36765b804827" },
});
//instance- задал параметры
export enum ResultCodeEnum{
  Success=0,
  Error=1
}
export enum ResultCodeforCaptchaEnum{
  CaptchaIsRequired=10
}
export type getItemsType={
  items:Array<UserType>
  totalCount: number,
  error: string|null
}
