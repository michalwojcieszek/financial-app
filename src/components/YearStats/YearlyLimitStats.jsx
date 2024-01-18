import StyledFormRow from "../../ui/StyledFormRow";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../../ui/StyledStatsSpanGreyedOut";
import ProgressBar from "../../ui/ProgressBar";
import H4 from "../../ui/H4";

function YearlyLimitStats({ sumExpenses, sumLimits, isLimitCrossed }) {
  const crossedLimitBy = sumExpenses - sumLimits;
  const expensesCompLimit = ((sumExpenses / sumLimits) * 100).toFixed(2);
  const leftToSpend = sumLimits - sumExpenses;

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
        Expenses this year:
        <StyledStatsSpan color={limitColor}>
          {" "}
          $ {sumExpenses}
        </StyledStatsSpan>{" "}
        <StyledStatsSpanGreyedOut>
          ({expensesCompLimit}% of limit)
        </StyledStatsSpanGreyedOut>
      </p>
      <ProgressBar filled={expensesCompLimit} color={limitColor} />
      <StyledStatsSpanGreyedOut size="small">
        limit of expenses: $ {sumLimits}
      </StyledStatsSpanGreyedOut>
    </StyledFormRow>
  );
}

export default YearlyLimitStats;
