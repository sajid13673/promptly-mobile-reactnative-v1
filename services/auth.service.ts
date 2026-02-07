import api from "@/services/api";

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/login", {
    email,
    password,
  });
  return response.data;
}

export async function logoutRequest() {
  return api.post("/logout");
}
