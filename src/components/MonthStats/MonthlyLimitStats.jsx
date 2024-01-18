import H4 from "../../ui/H4";
import ProgressBar from "../../ui/ProgressBar";
import StyledFormRow from "../../ui/StyledFormRow";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../../ui/StyledStatsSpanGreyedOut";

function MonthlyLimitStats({ sumExpensesThisMonth, limit, isLimitCrossed }) {
  const expensesCompLimit = ((sumExpensesThisMonth / limit) * 100).toFixed(2);
  const crossedLimitBy = sumExpensesThisMonth - limit;
  const leftToSpend = limit - sumExpensesThisMonth;

  let limitColor;
  switch (true) {
    case expensesCompLimit >= 100:
      limitColor = "--stats-red";
      break;
    case expensesCompLimit > 75:
      limitColor = "--stats-orange";
      break;
    case expensesCompLimit >= 50:
      limitColor = "--stats-yellow";
      break;
    case expensesCompLimit < 50:
      limitColor = "--stats-green";
      break;
    default:
      limitColor = "--color-blue-700";
      break;
  }

  return (
    <StyledFormRow>
      <H4>Limit tracking</H4>
      {isLimitCrossed ? (
        <p>
          Crossed the limit by{" "}
          <StyledStatsSpan color={limitColor}>
            $ {crossedLimitBy}
          </StyledStatsSpan>
        </p>
      ) : (
        <p>
          <StyledStatsSpan color={limitColor}>$ {leftToSpend}</StyledStatsSpan>{" "}
          left to spend to not cross the limit.
        </p>
      )}
      <p>
        Expenses this month:
        <StyledStatsSpan color={limitColor}>
          {" "}
          $ {sumExpensesThisMonth}
        </StyledStatsSpan>{" "}
        <StyledStatsSpanGreyedOut>
          ({expensesCompLimit}% of limit)
        </StyledStatsSpanGreyedOut>
      </p>
      <ProgressBar filled={expensesCompLimit} color={limitColor} />
      <StyledStatsSpanGreyedOut size="small">
        limit of expenses: $ {limit}
      </StyledStatsSpanGreyedOut>
    </StyledFormRow>
  );
}

export default MonthlyLimitStats;
