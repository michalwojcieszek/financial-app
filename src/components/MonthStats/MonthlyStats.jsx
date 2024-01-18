import { useNavigate, useParams } from "react-router-dom";
import ButtonUnderline from "../../ui/ButtonUnderline";
import H3 from "../../ui/H3";
import Section from "../../ui/Section";
import StyledFormDiv from "../../ui/StyledFormDiv";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import MonthlyLimitStats from "./MonthlyLimitStats";
import MonthlyIncomeStats from "./MonthlyIncomeStats";
import MonthlyExpensesChart from "./MonthlyExpensesChart";

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

  const goalToSave = income - limit;
  const isLimitCrossed = sumExpensesThisMonth > limit ? true : false;

  function handleGoToSettings() {
    navigate(`/users/${id}/settings`);
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
        <MonthlyLimitStats
          sumExpensesThisMonth={sumExpensesThisMonth}
          limit={limit}
          isLimitCrossed={isLimitCrossed}
        />
        <MonthlyIncomeStats
          sumExpensesThisMonth={sumExpensesThisMonth}
          income={income}
          isLimitCrossed={isLimitCrossed}
          goalToSave={goalToSave}
        />
        <MonthlyExpensesChart expensesThisMonth={expensesThisMonth} />
      </StyledFormDiv>
    </Section>
  );
}

export default MonthlyStats;
