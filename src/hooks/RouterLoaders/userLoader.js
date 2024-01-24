import { getUserDataById } from "../usersDataAPI/apiHandlers";

export async function userLoader({ params }) {
  const userData = await getUserDataById(params.id);
  return userData;
}
