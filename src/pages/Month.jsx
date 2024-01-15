import { useParams } from "react-router-dom";
import { getUserDataLoader } from "../hooks/apiFetching";
import AddExpenseForm from "../components/AddExpenseForm";

function Month() {
  const { month } = useParams();
  return (
    <div>
      <AddExpenseForm />
    </div>
  );
}

export default Month;

export async function loader({ params }) {
  const userData = await getUserDataLoader(params.id);
  return userData;
}
