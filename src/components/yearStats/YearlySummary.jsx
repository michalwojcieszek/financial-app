import StatsSpan from "../../ui/styledComponents/StatsSpan";
import H3 from "../../ui/styledComponents/H3";
import YearStatsUl from "../../ui/styledComponents/YearStatsUl";

function YearlySummary({
  expenses,
  savingsGoal,
  sumExpenses,
  averageCost,
  incomeColor,
  sumSaved,
  currency,
}) {
  const monthsExceedingLimit = Object.values(expenses).reduce((acc, cur) => {
    const monthlyExpenses = cur.reduce(
      (acc2, cur2) => acc2 + Number(cur2.cost),
      0
    );
    return acc + (monthlyExpenses > savingsGoal ? 1 : 0);
  }, 0);

  return (
    <YearStatsUl>
      <H3>Yearly stats</H3>
      {monthsExceedingLimit ? (
        <li>
          Limit has been exceeded <StatsSpan>{monthsExceedingLimit}</StatsSpan>{" "}
          times
        </li>
      ) : (
        <li>Limit has not been exceeded in any month</li>
      )}
      <li>
        <StatsSpan>
          {currency} {sumExpenses.toFixed(2)}
        </StatsSpan>{" "}
        spent (
        <StatsSpan>
          {currency} {averageCost.toFixed(2)}
        </StatsSpan>{" "}
        on average)
      </li>
      {sumSaved > 0 ? (
        <li>
          <StatsSpan color={incomeColor}>
            {currency} {sumSaved.toFixed(2)}
          </StatsSpan>{" "}
          saved
        </li>
      ) : (
        <StatsSpan color={incomeColor}>No money has been saved</StatsSpan>
      )}
    </YearStatsUl>
  );
}

export default YearlySummary;
