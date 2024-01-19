import H4 from "../ui/H4";
import ProgressBar from "../ui/ProgressBar";
import StyledFormRow from "../ui/StyledFormRow";
import StyledStatsSpan from "../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../ui/StyledStatsSpanGreyedOut";

function LimitStats({ sumExpenses, limit, isLimitCrossed, period, currency }) {
  const expensesCompLimit = (100 - (sumExpenses / limit) * 100).toFixed(2);
  const crossedLimitBy = sumExpenses - limit;
  const percExpensesOfLimit = ((sumExpenses / limit) * 100).toFixed(2);
  const leftToSpend = limit - sumExpenses;

  console.log(expensesCompLimit);
  let limitColor;
  switch (true) {
    case expensesCompLimit > 100 || expensesCompLimit < 0:
      limitColor = "--stats-red";
      break;
    case expensesCompLimit > 75:
      limitColor = "--stats-green";
      break;
    case expensesCompLimit >= 50:
      limitColor = "--stats-yellow";
      break;
    case expensesCompLimit < 50:
      limitColor = "--stats-orange";
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
            {currency} {crossedLimitBy.toFixed(2)}
          </StyledStatsSpan>
        </p>
      ) : (
        <p>
          <StyledStatsSpan color={limitColor}>
            {currency} {leftToSpend.toFixed(2)}
          </StyledStatsSpan>{" "}
          left to spend to not cross the limit.
        </p>
      )}
      <p>
        Expenses this {period}:
        <StyledStatsSpan color={limitColor}>
          {" "}
          {currency} {sumExpenses.toFixed(2)}
        </StyledStatsSpan>{" "}
        <StyledStatsSpanGreyedOut>
          ({percExpensesOfLimit}% of limit)
        </StyledStatsSpanGreyedOut>
      </p>
      <ProgressBar filled={expensesCompLimit} color={limitColor} />
      <StyledStatsSpanGreyedOut size="small">
        limit of expenses: $ {limit}
      </StyledStatsSpanGreyedOut>
    </StyledFormRow>
  );
}

export default LimitStats;
