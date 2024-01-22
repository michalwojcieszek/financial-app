//libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowPath } from "react-icons/hi2";
//styling
import Spinner from "../../ui/Spinner";
import { SelectCurrency } from "../../ui/styledComponents/SelectCurrency";
import ButtonSecondary from "../../ui/styledComponents/ButtonSecondary";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import FormRow from "../../ui/styledComponents/FormRow";
import StatsSpan from "../../ui/styledComponents/StatsSpan";
import H3 from "../../ui/styledComponents/H3";
import H4 from "../../ui/styledComponents/H4";
import Paragraph from "../../ui/styledComponents/Paragraph";
//functions
import { exchangeUserExpenses } from "../../hooks/UsersDataAPI/exchangeUserExpenses";
import ChangingCurrencyUl from "../../ui/styledComponents/ChangingCurrencyUl";

function ChangingCurrency({ currenciesRatesArray, currency, id }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [newCurrency, setNewCurrency] = useState(currency);

  const isCurrencyChanged = newCurrency !== currency;

  async function handleExchange() {
    if (!isCurrencyChanged) {
      toast.error(`The currency is the same`);
      return;
    }
    setIsLoading(true);
    const exchangeRate = currenciesRatesArray.filter(
      (el) => el.currency === newCurrency
    )[0].rate;
    await exchangeUserExpenses(id, exchangeRate, newCurrency);
    setIsLoading(false);
    navigate(`/users/${id}`);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FormRow>
            <H3>Change currency</H3>
            <label>
              Income, limit and your expenses will be calculated to the new
              currency.
            </label>
          </FormRow>
          <FormRow>
            <H4>Live currency rates:</H4>
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
          <div>
            <ButtonSecondary onClick={handleExchange}>
              <ButtonWithEmojiDiv>
                <HiArrowPath />
                Change currency
              </ButtonWithEmojiDiv>
            </ButtonSecondary>
          </div>
        </>
      )}
    </>
  );
}

export default ChangingCurrency;
