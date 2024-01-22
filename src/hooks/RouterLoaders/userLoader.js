import { getUserDataById } from "../UsersDataAPI/apiHandlers";

export async function userLoader({ params }) {
  const userData = await getUserDataById(params.id);
  return userData;
}
