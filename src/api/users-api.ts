import { getItemsType, instance, ApiResponceType } from "./api";

export const usersApi = {
  getUsera(currentPage = 1, pageSize = 10) {
    return (
      instance
        .get<getItemsType>(`users?page=${currentPage}&count=${pageSize}`)
        //запрос в userApiContainer
        //currentPage- выделен жирным номер страницы
        //pageSize: 10, -сколько показывать юзеров

        .then((response) => {
          return response.data;
          // (res=>res.data) можно так сокращенно
        })
    );
  },

  followApi(userId: number) {
    return instance.delete(`follow/${userId}`).then
      (res => res.data) as Promise<ApiResponceType>;
  },
  unfollowApi(userId: number) {
    return instance.post<ApiResponceType>(`follow/${userId}`).then(res => res.data);
  },
  // getProfileApi(userIdd: number) {
  //   console.warn('Obsolete method. Please profileApi object.');
  //   return profileApi.getProfileApi(userIdd)
  // }
};