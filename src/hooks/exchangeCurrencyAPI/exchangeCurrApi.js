const host = "api.frankfurter.app";

export default async function exchangeCurrApi(from, to) {
  try {
    const res = await fetch(
      `https://${host}/latest?amount=1&from=${from}&to=${to}`
    );
    if (!res.ok) throw Error();
    const data = await res.json();
    const rate = data.rates[to];
    return rate;
  } catch {
    throw Error("Failed getting live currencies");
  }
}
