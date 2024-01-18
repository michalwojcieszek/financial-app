import styled from "styled-components";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import H3 from "../../ui/H3";

const StyledYearStatsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  list-style: none;
`;

function YearlySummary({
  expenses,
  limit,
  sumExpenses,
  averageCost,
  incomeColor,
  sumSaved,
}) {
  const monthsExceedingLimit = Object.values(expenses).reduce((acc, cur) => {
    const monthlyExpenses = cur.reduce(
      (acc2, cur2) => acc2 + Number(cur2.cost),
      0
    );
    return acc + (monthlyExpenses > limit ? 1 : 0);
  }, 0);

  return (
    <StyledYearStatsUl>
      <H3>Yearly stats</H3>
      {monthsExceedingLimit ? (
        <li>
          Limit has been exceeded{" "}
          <StyledStatsSpan>{monthsExceedingLimit}</StyledStatsSpan> times
        </li>
      ) : (
        <li>Limit has not been exceeded in any month</li>
      )}
      <li>
        <StyledStatsSpan>$ {sumExpenses}</StyledStatsSpan> have been spent (
        <StyledStatsSpan>$ {averageCost}</StyledStatsSpan> on average)
      </li>
      {sumSaved > 0 ? (
        <li>
          <StyledStatsSpan color={incomeColor}>$ {sumSaved}</StyledStatsSpan>{" "}
          has been saved
        </li>
      ) : (
        <StyledStatsSpan color={incomeColor}>
          No money has been saved
        </StyledStatsSpan>
      )}
    </StyledYearStatsUl>
  );
}

export default YearlySummary;
