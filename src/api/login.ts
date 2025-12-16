
import { authApi } from "../api/savierApi";

async function handleLogin(email: string, password: string) {
  const data = await authApi.login({ email, password });

  localStorage.setItem("token", data.token); // ajusta si se llama distinto
}

