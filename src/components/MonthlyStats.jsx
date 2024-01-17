import H3 from "../ui/H3";
import Section from "../ui/Section";

function MonthlyStats({ userData, expensesThisMonth, monthString }) {
  const { income, limit } = userData;
  // const allExpensesThisMonth =

  return (
    <Section>
      <H3>State of budget in {monthString}</H3>
      <p>All expenses / Limit (how much left to spend to fit the limit)</p>
      {/* <progress max={limit} value={}></progress> */}
      <p>All expenses / Income (how much money left from income)</p>

      <p>{income}</p>
      <p>{limit}</p>
    </Section>
  );
}

export default MonthlyStats;
