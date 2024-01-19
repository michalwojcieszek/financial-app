const host = "api.frankfurter.app";

export async function exchangeCurrApi(from, to) {
  const res = await fetch(
    `https://${host}/latest?amount=1&from=${from}&to=${to}`
  );
  const data = await res.json();
  const rate = data.rates[to];
  return rate;
}
