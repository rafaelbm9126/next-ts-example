export const setSession = (token: string | null): boolean => {
  if (typeof localStorage !== "undefined" && typeof token === "string") {
    localStorage.setItem("token", token);
    return true;
  }
  return false;
};

export const getSession = (): string | null => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const delSession = (): void => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("token")
  }
};
