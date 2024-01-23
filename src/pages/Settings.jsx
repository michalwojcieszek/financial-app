import { useLoaderData, useParams } from "react-router-dom";
import H2 from "../ui/styledComponents/H2";
import Section from "../ui/styledComponents/Section";
import FormDiv from "../ui/styledComponents/FormDiv";
import BackToDashboard from "../components/Settings/BackToDashboard";
import SetIncomeLimit from "../components/Settings/SetIncomeLimit";
import ChangingCurrency from "../components/Settings/ChangingCurrency";
import DeleteAccount from "../components/Settings/DeleteAccount";
import { useGlobal } from "../contexts/GlobalContext";

function Settings() {
  const { openSettingsPopup } = useGlobal();
  const { user, currenciesRatesArray } = useLoaderData();
  const { id } = useParams();
  const { savingsGoal, income, currency } = user.userData;

  return (
    <Section type="flex">
      <FormDiv>
        <BackToDashboard id={id} />
        <H2>Settings</H2>
      </FormDiv>
      <FormDiv>
        <SetIncomeLimit income={income} savingsGoal={savingsGoal} id={id} />
      </FormDiv>
      <FormDiv>
        <ChangingCurrency
          currenciesRatesArray={currenciesRatesArray}
          currency={currency}
          id={id}
        />
      </FormDiv>
      <DeleteAccount openSettingsPopup={openSettingsPopup} />
    </Section>
  );
}

export default Settings;
