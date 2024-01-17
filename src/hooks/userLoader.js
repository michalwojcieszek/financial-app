import { getUserDataById } from "./apiFetching";

export async function loader({ params }) {
  const userData = await getUserDataById(params.id);
  return userData;
}
