import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "66060485-250e-40e6-994f-36765b804827" },
});
//instance- задал параметры
export const usersApi = {
  getUsera(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)

      .then((response) => {
        return response.data;
      });
  },
};
/*export const followApi = {
  getFollow(u.id=1) {
     return instance
     .post(`follow/${u.id}`)
    .then((response) => {
      return response.data;
    });
  },
};
export const unfollowApi = {
  getUnfollow(u.id=1) {
     return instance
     .delete(`follow/${u.id}`)
    .then((response) => {
      return response.data;
    });
  },
};

 {
                      axios
                        .post(
                          //followApi.getFollow(u.id)
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {}, { withCredentials: true, 
                            // передать куку. пишется 3м параметром в post
                          headers:{'API-KEY': '66060485-250e-40e6-994f-36765b804827'}}
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
                    } */
                    /* {
                      axios
                        .delete(
                          //usersApi.getFollow(u.id)
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                             // передать куку. пишется 2м параметром в delete,get
                            headers: {
                              "API-KEY": "66060485-250e-40e6-994f-36765b804827",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                        });
                    } */
