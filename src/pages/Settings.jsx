import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import H2 from "../ui/H2";
import Section from "../ui/Section";
import StyledInput from "../ui/StyledInput";
import StyledButtonSecondary from "../ui/StyledButtonSecondary";
import StyledButtonWithEmojiDiv from "../ui/StyledButtonWithEmojiDiv";
import {
  HiAdjustmentsVertical,
  HiArrowPath,
  HiArrowUturnLeft,
  HiOutlineTrash,
} from "react-icons/hi2";
import StyledFormRow from "../ui/StyledFormRow";
import { useState } from "react";
import toast from "react-hot-toast";
import { changeIncomeAndLimit } from "../hooks/apiHandlers";
import StyledButtonDeleteAccount from "../ui/StyledButtonDeleteAccount";
import StyledFormDiv from "../ui/StyledFormDiv";
import StyledDivDeleteButton from "../ui/StyledDivDeleteButton";
import { useApp } from "../contexts/AppContext";
import H4 from "../ui/H4";
import { SelectCurrency } from "../ui/SelectCurrency";
import { exchangeCurrency } from "../hooks/exchangeCurrency";
import Spinner from "../ui/Spinner";
import StyledStatsSpan from "../ui/StyledStatsSpan";

function Settings() {
  const { setIsSettingsPopupOpen } = useApp();
  const user = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { limit, income, currency } = user.userData;

  const [newIncome, setNewIncome] = useState(income);
  const [newLimit, setNewLimit] = useState(limit);
  const [newCurrency, setNewCurrency] = useState(currency);
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState("");

  const isCurrencyChanged = newCurrency !== currency;

  async function handleSaveChanges() {
    if (income === newIncome && limit === newLimit) {
      toast.error(
        `New limit and income are the same as previously. No change has been made.`
      );
      return;
    }
    await changeIncomeAndLimit(id, newIncome, newLimit);
    toast.success("Your change has been saved");
  }

  function handleGoBackToDashboard() {
    navigate(`/users/${id}`);
  }

  async function handleChangeCurrency(e) {
    setNewCurrency(e.target.value);
    if (!isCurrencyChanged) {
      toast.error(`The currency is the same`);
      return;
    }
    setIsLoading(true);
    const rate = await exchangeCurrency(currency, newCurrency);
    console.log(rate);
    setExchangeRate(rate);
    setIsLoading(false);
  }

  return (
    <Section>
      <StyledFormDiv>
        <div>
          <StyledButtonSecondary onClick={handleGoBackToDashboard}>
            <StyledButtonWithEmojiDiv>
              <HiArrowUturnLeft />
              Go back to your dashboard
            </StyledButtonWithEmojiDiv>
          </StyledButtonSecondary>
        </div>
        <H2>Settings</H2>
      </StyledFormDiv>
      <StyledFormDiv>
        <StyledFormRow>
          <H4>Set new income and limit</H4>
          <label>Set new monthly income</label>
          <StyledInput
            type="number"
            size="large"
            defaultValue={income}
            onChange={(e) => setNewIncome(e.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label>Set new limit of expenses</label>
          <StyledInput
            type="number"
            size="large"
            defaultValue={limit}
            onChange={(e) => setNewLimit(e.target.value)}
          />
        </StyledFormRow>
        <div>
          <StyledButtonSecondary onClick={handleSaveChanges}>
            <StyledButtonWithEmojiDiv>
              <HiAdjustmentsVertical />
              Save changes
            </StyledButtonWithEmojiDiv>
          </StyledButtonSecondary>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <StyledFormRow>
              <H4>Change currency</H4>
              <label>
                Income, limit and your expenses will be displayed in the other
                currency.
              </label>
              <SelectCurrency
                onChange={handleChangeCurrency}
                defaultValue={currency}
              >
                <option value="USD">USD (🇺🇸)</option>
                <option value="EUR">EUR (🇪🇺)</option>
                <option value="GBP">GBP (🇬🇧)</option>
                <option value="CHF">CHF (🇨🇭)</option>
                <option value="PLN">PLN (🇵🇱)</option>
              </SelectCurrency>
            </StyledFormRow>
            {isCurrencyChanged ? (
              <>
                <p>
                  <StyledStatsSpan>1 </StyledStatsSpan>
                  {currency} is{" "}
                  <StyledStatsSpan>{exchangeRate} </StyledStatsSpan>
                  {newCurrency}
                </p>
                <p>Currency exchange rate provided by:</p>
              </>
            ) : (
              ""
            )}
            <div>
              <StyledButtonSecondary>
                <StyledButtonWithEmojiDiv>
                  <HiArrowPath />
                  Change currency from {currency} to {newCurrency}
                </StyledButtonWithEmojiDiv>
              </StyledButtonSecondary>
            </div>
          </>
        )}
        <StyledDivDeleteButton>
          <StyledButtonDeleteAccount
            onClick={() => setIsSettingsPopupOpen(true)}
          >
            <StyledButtonWithEmojiDiv>
              <HiOutlineTrash />
              Delete your account
            </StyledButtonWithEmojiDiv>
          </StyledButtonDeleteAccount>
        </StyledDivDeleteButton>
      </StyledFormDiv>
    </Section>
  );
}

export default Settings;
