import api from ".";

/** 회원가입  */
export const signUp = async (email, password) => {
  return await api.post('/auth/signup', { email, password });
};

/** 로그인 */
export const signIn = async (email, password) => {
  return await api.post("/auth/signin", { email, password });
};
