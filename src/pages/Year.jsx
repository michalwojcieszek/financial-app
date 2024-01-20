import { useLoaderData } from "react-router-dom";
import YearlyStats from "../components/YearStats/YearlyStats";

function Year() {
  const user = useLoaderData();
  const { expenses } = user;
  const { limit, income, currency } = user.userData;

  return (
    <YearlyStats
      expenses={expenses}
      limit={limit}
      income={income}
      currency={currency}
    />
  );
}

export default Year;
