import Section from "../../ui/styledComponents/Section";
import FormDiv from "../../ui/styledComponents/FormDiv";
import YearlySummary from "./YearlySummary";
import YearlyExpensesChart from "./YearlyExpensesChart";
import LimitStats from "../LimitStats";
import IncomeStats from "../IncomeStats";
import H3 from "../../ui/styledComponents/H3";

function YearlyStats({ expenses, savingsGoal, income, currency }) {
  const monthsNum = 12;
  const sumExpenses = Object.values(expenses).reduce((acc, cur) => {
    const sumInMonth = cur.reduce((acc2, cur2) => acc2 + Number(cur2.cost), 0);
    return acc + sumInMonth;
  }, 0);

  //diferent variable name than month
  const sumIncomes = income * monthsNum;
  const sumSavingsGoal = savingsGoal * monthsNum;
  const averageCost = sumExpenses / monthsNum;
  const totalSavings = sumIncomes - sumExpenses;
  //same variable name as in month
  const sumSaved = sumIncomes - sumExpenses;
  const isSavingsGoalAchieved = sumSaved > sumSavingsGoal ? true : false;
  console.log(sumSaved, savingsGoal);

  let incomeColor;
  switch (true) {
    case totalSavings < sumIncomes * 0.25:
      incomeColor = "--stats-red";
      break;
    case totalSavings < sumIncomes * 0.5:
      incomeColor = "--stats-orange";
      break;
    case totalSavings < sumIncomes * 0.75:
      incomeColor = "--stats-yellow";
      break;
    case totalSavings >= sumIncomes * 0.75:
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
        savingsGoal={savingsGoal}
        averageCost={averageCost}
        sumExpenses={sumExpenses}
        incomeColor={incomeColor}
        sumSaved={sumSaved}
        currency={currency}
      />
      <FormDiv>
        <LimitStats
          sumExpenses={sumExpenses}
          savingsGoal={sumSavingsGoal}
          sumSaved={sumSaved}
          isSavingsGoalAchieved={isSavingsGoalAchieved}
          period="year"
          currency={currency}
          income={sumIncomes}
        />
        <IncomeStats
          expense={sumExpenses}
          income={sumIncomes}
          incomeColor={incomeColor}
          isSavingsGoalAchieved={isSavingsGoalAchieved}
          totalSavings={totalSavings}
          sumSaved={sumSaved}
          period="year"
          currency={currency}
        />
        <YearlyExpensesChart expenses={expenses} />
      </FormDiv>
    </Section>
  );
}

export default YearlyStats;
