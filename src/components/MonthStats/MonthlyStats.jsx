import { useNavigate, useParams } from "react-router-dom";
import H3 from "../../ui/styledComponents/H3";
import Section from "../../ui/styledComponents/Section";
import FormDiv from "../../ui/styledComponents/FormDiv";
import StatsSpan from "../../ui/styledComponents/StatsSpan";
import MonthlyExpensesChart from "./MonthlyExpensesChart";
import LimitStats from "../LimitStats";
import IncomeStats from "../IncomeStats";
import ButtonUnderline from "../../ui/styledComponents/ButtonUnderline";

function MonthlyStats({
  expensesThisMonth,
  monthString,
  currency,
  limit,
  income,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allExpensesThisMonthArray = expensesThisMonth.map(
    (expense) => +expense.cost
  );

  const sumExpensesThisMonth = allExpensesThisMonthArray.reduce(
    (acc, cur) => acc + cur,
    0
  );
  const sumSaved = income - sumExpensesThisMonth;
  const goalToSave = income - limit;
  const isLimitCrossed = sumExpensesThisMonth > limit ? true : false;

  function handleGoToSettings() {
    navigate(`/users/${id}/settings`);
  }

  let incomeColor;
  switch (true) {
    case sumSaved < income * 0.25:
      incomeColor = "--stats-red";
      break;
    case sumSaved < income * 0.5:
      incomeColor = "--stats-orange";
      break;
    case sumSaved < income * 0.75:
      incomeColor = "--stats-yellow";
      break;
    case sumSaved >= income * 0.75:
      incomeColor = "--stats-green";
      break;
    default:
      incomeColor = "--color-blue-700";
      break;
  }

  if (!expensesThisMonth.length) return;

  return (
    <Section>
      <H3>State of the budget in {monthString}</H3>
      <div>
        Your goal is to save{" "}
        <StatsSpan color="--color-blue-700">
          {currency} {goalToSave.toFixed(2)}
        </StatsSpan>{" "}
        each month.{" "}
        <p>
          If you want to change it, then{" "}
          <ButtonUnderline onClick={handleGoToSettings}>
            GO TO SETTINGS
          </ButtonUnderline>
        </p>
      </div>
      <FormDiv>
        <LimitStats
          sumExpenses={sumExpensesThisMonth}
          limit={limit}
          isLimitCrossed={isLimitCrossed}
          period="month"
          currency={currency}
        />
        <IncomeStats
          expense={sumExpensesThisMonth}
          income={income}
          incomeColor={incomeColor}
          isLimitCrossed={isLimitCrossed}
          sumSaved={sumSaved}
          period="month"
          currency={currency}
        />
        <MonthlyExpensesChart expensesThisMonth={expensesThisMonth} />
      </FormDiv>
    </Section>
  );
}

export default MonthlyStats;
