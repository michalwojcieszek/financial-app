import { getUserDataById } from "./apiFetching";
import { exchangeCurrApi } from "./exchangeCurrApi";

export async function userCurrenciesLoader({ params }) {
  const user = await getUserDataById(params.id);
  console.log(user.expenses);
  const userCurrency = user.userData.currency;
  console.log(userCurrency);
  const allCurrencies = ["USD", "EUR", "GBP", "CHF", "PLN"];
  const currenciesAvailableToExchange = allCurrencies.filter(
    (curr) => curr !== userCurrency
  );

  const exchangeRatePromises = currenciesAvailableToExchange.map(
    async (currency) => {
      const rate = await exchangeCurrApi(userCurrency, currency);
      return { rate, currency };
    }
  );

  const currenciesRatesArray = await Promise.all(exchangeRatePromises);
  console.log(currenciesRatesArray);

  return { user, currenciesRatesArray };
}
