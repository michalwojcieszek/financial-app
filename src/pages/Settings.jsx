import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import H2 from "../ui/H2";
import Section from "../ui/Section";
import StyledFormDiv from "../ui/StyledFormDiv";
import { useApp } from "../contexts/AppContext";
import BackToDashboard from "../components/Settings/BackToDashboard";
import SetIncomeLimit from "../components/Settings/SetIncomeLimit";
import ChangingCurrency from "../components/Settings/ChangingCurrency";
import DeleteAccount from "../components/Settings/DeleteAccount";

function Settings() {
  const { setIsSettingsPopupOpen } = useApp();
  const { user, currenciesRatesArray } = useLoaderData();
  const { id } = useParams();
  const { limit, income, currency } = user.userData;

  return (
    <Section type="flex">
      <StyledFormDiv>
        <BackToDashboard id={id} />
        <H2>Settings</H2>
      </StyledFormDiv>
      <StyledFormDiv>
        <SetIncomeLimit income={income} limit={limit} id={id} />
      </StyledFormDiv>
      <StyledFormDiv>
        <ChangingCurrency
          currenciesRatesArray={currenciesRatesArray}
          currency={currency}
          id={id}
        />
      </StyledFormDiv>
      <DeleteAccount setIsSettingsPopupOpen={setIsSettingsPopupOpen} />
    </Section>
  );
}

export default Settings;
