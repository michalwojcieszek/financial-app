import toast from "react-hot-toast";
import { SelectCurrency } from "../../ui/SelectCurrency";
import Spinner from "../../ui/Spinner";
import StyledButtonSecondary from "../../ui/StyledButtonSecondary";
import StyledButtonWithEmojiDiv from "../../ui/StyledButtonWithEmojiDiv";
import StyledFormRow from "../../ui/StyledFormRow";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import styled from "styled-components";
import { useState } from "react";
import { HiArrowPath } from "react-icons/hi2";
import H3 from "../../ui/H3";
import H4 from "../../ui/H4";
import { exchangeUserExpenses } from "../../hooks/exchangeUserExpenses";
import { useNavigate } from "react-router-dom";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  list-style: none;
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
`;

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
          <StyledFormRow>
            <H3>Change currency</H3>
            <label>
              Income, limit and your expenses will be calculated to the new
              currency.
            </label>
          </StyledFormRow>
          <StyledFormRow>
            <H4>Live currency rates:</H4>
            <StyledParagraph>
              Your current currency:{" "}
              <StyledStatsSpan>{currency}</StyledStatsSpan>
            </StyledParagraph>
            <StyledUl>
              {currenciesRatesArray.map((el) => (
                <li>
                  1 <StyledStatsSpan>{currency}</StyledStatsSpan> is {el.rate}{" "}
                  <StyledStatsSpan>{el.currency}</StyledStatsSpan>
                </li>
              ))}
            </StyledUl>
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
                  <StyledStatsSpan> {currency} </StyledStatsSpan>
                  to
                  <StyledStatsSpan> {newCurrency} </StyledStatsSpan>
                </p>
              </>
            ) : (
              ""
            )}
          </StyledFormRow>
          <div>
            <StyledButtonSecondary onClick={handleExchange}>
              <StyledButtonWithEmojiDiv>
                <HiArrowPath />
                Change currency
              </StyledButtonWithEmojiDiv>
            </StyledButtonSecondary>
          </div>
        </>
      )}
    </>
  );
}

export default ChangingCurrency;
