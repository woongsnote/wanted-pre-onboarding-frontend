import axiosInstance from ".";

/** 회원가입  */
export const signUp = async (email, password) => {
  return await axiosInstance.post("/auth/signup", { email, password });
};

/** 로그인 */
export const signIn = async (email, password) => {
  return await axiosInstance.post("/auth/signin", { email, password });
};
