import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "1d4ff58e-baa7-4b27-81a9-617712a74b32" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
};