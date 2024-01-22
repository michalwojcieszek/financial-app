import H4 from "../ui/styledComponents/H4";
import ProgressBar from "../ui/ProgressBar";
import FormRow from "../ui/styledComponents/FormRow";
import StatsSpan from "../ui/styledComponents/StatsSpan";
import SpanGreyedOut from "../ui/styledComponents/SpanGreyedOut";

function LimitStats({ sumExpenses, limit, isLimitCrossed, period, currency }) {
  const expensesCompLimit = 100 - (sumExpenses / limit) * 100;
  const crossedLimitBy = sumExpenses - limit;
  const percExpensesOfLimit = (sumExpenses / limit) * 100;
  const leftToSpend = limit - sumExpenses;

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
    <FormRow>
      <H4>Limit tracking</H4>
      {isLimitCrossed ? (
        <p>
          Crossed the limit by{" "}
          <StatsSpan color={limitColor}>
            {currency} {crossedLimitBy.toFixed(2)}
          </StatsSpan>
        </p>
      ) : (
        <p>
          <StatsSpan color={limitColor}>
            {currency} {leftToSpend.toFixed(2)}
          </StatsSpan>{" "}
          left to spend to not cross the limit.
        </p>
      )}
      <p>
        Expenses this {period}:
        <StatsSpan color={limitColor}>
          {" "}
          {currency} {sumExpenses.toFixed(2)}
        </StatsSpan>{" "}
        <SpanGreyedOut>
          ({percExpensesOfLimit.toFixed(2)}% of limit)
        </SpanGreyedOut>
      </p>
      <ProgressBar filled={expensesCompLimit.toFixed(2)} color={limitColor} />
      <SpanGreyedOut size="small">
        limit of expenses: {currency} {limit.toFixed(2)}
      </SpanGreyedOut>
    </FormRow>
  );
}

export default LimitStats;
