export const loginAction = (data: any) => ({
  type: "ADD_LOGIN_DATA",
  payload: data,
});

export const logoutAction = () => ({
  type: "DELETE_LOGIN_DATA",
});
