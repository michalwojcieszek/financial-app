//libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowPath } from "react-icons/hi2";
//styling
import { SelectCurrency } from "../../ui/styledComponents/SelectCurrency";
import ButtonSecondary from "../../ui/styledComponents/ButtonSecondary";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import FormRow from "../../ui/styledComponents/FormRow";
import StatsSpan from "../../ui/styledComponents/StatsSpan";
import H3 from "../../ui/styledComponents/H3";
import H4 from "../../ui/styledComponents/H4";
import Paragraph from "../../ui/styledComponents/Paragraph";
import BlinkingLight from "../../ui/styledComponents/BlinkingLight";
//functions
import ChangingCurrencyUl from "../../ui/styledComponents/ChangingCurrencyUl";
import { useGlobal } from "../../contexts/GlobalContext";
import { exchangeUserExpenses } from "../../hooks/usersDataAPI/exchangeUserExpenses";
import CurrencyOneLineFlex from "../../ui/styledComponents/CurrencyOneLineFlex";

function ChangingCurrency({ currenciesRatesArray, currency, id }) {
  const navigate = useNavigate();
  const { loading, notLoading } = useGlobal();

  const [newCurrency, setNewCurrency] = useState(currency);

  const isCurrencyChanged = newCurrency !== currency;

  async function handleExchange() {
    if (!isCurrencyChanged) {
      toast.error(`The currency is the same`);
      return;
    }
    loading();
    const exchangeRate = currenciesRatesArray.filter(
      (el) => el.currency === newCurrency
    )[0].rate;
    await exchangeUserExpenses(id, exchangeRate, newCurrency);
    notLoading();
    navigate(`/users/${id}`);
  }

  return (
    <>
      <FormRow>
        <H3>Change currency</H3>
        <label>
          Income, savingsGoal and your expenses will be calculated to the new
          currency.
        </label>
      </FormRow>
      <FormRow>
        <CurrencyOneLineFlex>
          <BlinkingLight className="fa fa-circle"></BlinkingLight>
          <H4 style={{ margin: "0" }}>
            <span style={{ color: "#f00" }}>
              {" "}
              {new Date().toLocaleDateString()} {" - "}
              {new Date().toLocaleTimeString()}
            </span>{" "}
            currency rates:
          </H4>
        </CurrencyOneLineFlex>
        <Paragraph>
          Your current currency: <StatsSpan>{currency}</StatsSpan>
        </Paragraph>
        <ChangingCurrencyUl>
          {currenciesRatesArray.map((el) => (
            <li key={el.currency}>
              1 <StatsSpan>{currency}</StatsSpan> is {el.rate}{" "}
              <StatsSpan>{el.currency}</StatsSpan>
            </li>
          ))}
        </ChangingCurrencyUl>
        <SelectCurrency
          onChange={(e) => setNewCurrency(e.target.value)}
          defaultValue={currency}
        >
          <option value="USD">USD (🇺🇸)</option>
          <option value="EUR">EUR (🇪🇺)</option>
          <option value="GBP">GBP (🇬🇧)</option>
          <option value="CHF">CHF (🇨🇭)</option>
          <option value="PLN">PLN (🇵🇱)</option>
        </SelectCurrency>
        {isCurrencyChanged ? (
          <>
            <p>
              {" "}
              You want to exchange
              <StatsSpan> {currency} </StatsSpan>
              to
              <StatsSpan> {newCurrency} </StatsSpan>
            </p>
          </>
        ) : (
          ""
        )}
      </FormRow>
      <ButtonSecondary onClick={handleExchange}>
        <ButtonWithEmojiDiv>
          <HiArrowPath />
          Change currency
        </ButtonWithEmojiDiv>
      </ButtonSecondary>
    </>
  );
}

export default ChangingCurrency;
