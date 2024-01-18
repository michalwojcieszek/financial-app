import { useNavigate, useParams } from "react-router-dom";
import ButtonUnderline from "../../ui/ButtonUnderline";
import H3 from "../../ui/H3";
import Section from "../../ui/Section";
import StyledFormDiv from "../../ui/StyledFormDiv";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import MonthlyExpensesChart from "./MonthlyExpensesChart";
import LimitStats from "../LimitStats";
import IncomeStats from "../IncomeStats";

function MonthlyStats({ userData, expensesThisMonth, monthString }) {
  const { income, limit } = userData;
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
    case sumSaved < goalToSave * 0.25:
      incomeColor = "--stats-red";
      break;
    case sumSaved < goalToSave * 0.5:
      incomeColor = "--stats-orange";
      break;
    case sumSaved < goalToSave:
      incomeColor = "--stats-yellow";
      break;
    case sumSaved >= goalToSave:
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
        <StyledStatsSpan color="--color-blue-700">
          $ {goalToSave}
        </StyledStatsSpan>{" "}
        each month.{" "}
        <p>
          If you want to change it, then{" "}
          <ButtonUnderline onClick={handleGoToSettings}>
            GO TO SETTINGS
          </ButtonUnderline>
        </p>
      </div>
      <StyledFormDiv>
        <LimitStats
          sumExpenses={sumExpensesThisMonth}
          limit={limit}
          isLimitCrossed={isLimitCrossed}
          period="month"
        />
        <IncomeStats
          expense={sumExpensesThisMonth}
          income={income}
          incomeColor={incomeColor}
          isLimitCrossed={isLimitCrossed}
          sumSaved={sumSaved}
          period="month"
        />
        <MonthlyExpensesChart expensesThisMonth={expensesThisMonth} />
      </StyledFormDiv>
    </Section>
  );
}

export default MonthlyStats;
