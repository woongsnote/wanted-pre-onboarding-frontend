const emailCheck = (email) => {
  return email.includes("@") ? true : false;
};

const passwordCheck = (password) => {
  return password.length >= 8 ? true : false;
};

export { emailCheck, passwordCheck };
