import { SavePhotosResponceDataType } from "../Redux/profileReduser";
import { profileType } from "../types/types";
import { instance, ApiResponceType } from "./api";

export const profileApi = {
    getProfileApi(userIdd: number) {
      return instance.get<profileType>(`profile/` + userIdd).then(res => res.data)
    },
    //получил : ищу работу... фото и др.
    getUserStatus(userIdd: number) {
      return instance.get(`profile/status/` + userIdd).then(res => res.data)
    },
    updateStatus(status: string) {
      return instance.put<ApiResponceType>(`profile/status/`, { status: status }).then(res => res.data)
    },
    // отправляю на сервер объект -> status:status
    savePhoto(photoFile: any) {
      let formData = new FormData();
      formData.append("image", photoFile);
      return instance.put<ApiResponceType<SavePhotosResponceDataType>>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => res.data)
    },
    saveProfile(profile: profileType) {
      return instance.put(`profile`, profile).then(res => res.data)
    },
  };