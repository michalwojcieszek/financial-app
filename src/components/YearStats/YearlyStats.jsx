import { useLoaderData } from "react-router-dom";
import Section from "../../ui/Section";
import StyledFormDiv from "../../ui/StyledFormDiv";
import YearlySummary from "./YearlySummary";
import YearlyExpensesChart from "./YearlyExpensesChart";
import LimitStats from "../LimitStats";
import IncomeStats from "../IncomeStats";

function YearlyStats() {
  const user = useLoaderData();
  const { expenses } = user;
  const { limit, income } = user.userData;
  const monthsNum = 12;

  const sumExpenses = Object.values(expenses).reduce((acc, cur) => {
    const sumInMonth = cur.reduce((acc2, cur2) => acc2 + Number(cur2.cost), 0);
    return acc + sumInMonth;
  }, 0);

  const sumIncomes = income * monthsNum;
  const sumLimits = limit * monthsNum;
  const goalToSave = sumIncomes - sumLimits;
  const isLimitCrossed = sumLimits < sumExpenses ? true : false;

  const sumSaved = sumIncomes - sumExpenses;

  const averageCost = (sumExpenses / monthsNum).toFixed(2);
  const totalSavings = sumIncomes - sumExpenses;

  let incomeColor;
  switch (true) {
    case totalSavings < goalToSave * 0.25:
      incomeColor = "--stats-red";
      break;
    case totalSavings < goalToSave * 0.5:
      incomeColor = "--stats-orange";
      break;
    case totalSavings < goalToSave:
      incomeColor = "--stats-yellow";
      break;
    case totalSavings >= goalToSave:
      incomeColor = "--stats-green";
      break;
    default:
      incomeColor = "--color-blue-700";
      break;
  }

  if (expenses === 0) return;

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
      />
      <StyledFormDiv>
        <LimitStats sumExpenses={sumExpenses} limit={sumLimits} period="year" />
        <IncomeStats
          expense={sumExpenses}
          income={sumIncomes}
          incomeColor={incomeColor}
          isLimitCrossed={isLimitCrossed}
          totalSavings={totalSavings}
          sumSaved={sumSaved}
          period="year"
        />
        <YearlyExpensesChart expenses={expenses} />
      </StyledFormDiv>
    </Section>
  );
}

export default YearlyStats;
