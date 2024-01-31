import { getUserDataById } from "../usersDataAPI/apiHandlers";

export async function getUserLoader({ params }) {
  const userData = await getUserDataById(params.id);
  return userData;
}
