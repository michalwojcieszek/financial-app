import { getUserDataById } from "./apiFetching";

export async function userLoader({ params }) {
  const userData = await getUserDataById(params.id);
  return userData;
}
