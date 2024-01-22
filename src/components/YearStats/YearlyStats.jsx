import Section from "../../ui/Section";
import StyledFormDiv from "../../ui/StyledFormDiv";
import YearlySummary from "./YearlySummary";
import YearlyExpensesChart from "./YearlyExpensesChart";
import LimitStats from "../LimitStats";
import IncomeStats from "../IncomeStats";
import H3 from "../../ui/H3";

function YearlyStats({ expenses, limit, income, currency }) {
  const monthsNum = 12;
  const sumExpenses = Object.values(expenses).reduce((acc, cur) => {
    const sumInMonth = cur.reduce((acc2, cur2) => acc2 + Number(cur2.cost), 0);
    return acc + sumInMonth;
  }, 0);

  console.log(typeof limit, typeof income);
  const sumIncomes = income * monthsNum;
  const sumLimits = limit * monthsNum;
  const goalToSave = sumIncomes - sumLimits;
  const isLimitCrossed = sumLimits < sumExpenses ? true : false;

  const sumSaved = sumIncomes - sumExpenses;

  const averageCost = sumExpenses / monthsNum;
  const totalSavings = sumIncomes - sumExpenses;

  let incomeColor;
  switch (true) {
    case totalSavings < goalToSave * 0.25:
      incomeColor = "--stats-red";
      break;
    case totalSavings < goalToSave * 0.5:
      incomeColor = "--stats-orange";
      break;
    case totalSavings < goalToSave * 0.75:
      incomeColor = "--stats-yellow";
      break;
    case totalSavings >= goalToSave * 0.75:
      incomeColor = "--stats-green";
      break;
    default:
      incomeColor = "--color-blue-700";
      break;
  }

  if (sumExpenses === 0)
    return (
      <Section>
        <H3>You have no expenses yet</H3>
        <p>Choose the month and add some &uarr;</p>
      </Section>
    );

  return (
    <Section>
      <YearlySummary
        expenses={expenses}
        limit={limit}
        averageCost={averageCost}
        sumExpenses={sumExpenses}
        incomeColor={incomeColor}
        sumSaved={sumSaved}
        isLimitCrossed={isLimitCrossed}
        currency={currency}
      />
      <StyledFormDiv>
        <LimitStats
          sumExpenses={sumExpenses}
          limit={sumLimits}
          period="year"
          currency={currency}
        />
        <IncomeStats
          expense={sumExpenses}
          income={sumIncomes}
          incomeColor={incomeColor}
          isLimitCrossed={isLimitCrossed}
          totalSavings={totalSavings}
          sumSaved={sumSaved}
          period="year"
          currency={currency}
        />
        <YearlyExpensesChart expenses={expenses} />
      </StyledFormDiv>
    </Section>
  );
}

export default YearlyStats;
