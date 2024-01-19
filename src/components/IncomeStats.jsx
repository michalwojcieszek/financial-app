import H4 from "../ui/H4";
import ProgressBar from "../ui/ProgressBar";
import StyledFormRow from "../ui/StyledFormRow";
import StyledStatsSpan from "../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../ui/StyledStatsSpanGreyedOut";

function IncomeStats({
  expense,
  income,
  incomeColor,
  totalSavings,
  isLimitCrossed,
  sumSaved,
  period,
  currency,
}) {
  const isIncomeCrossed = expense > income ? true : false;
  const crossedIncomeBy = (expense - income).toFixed(2);
  const totalSavingsPerc = ((sumSaved / income) * 100).toFixed(2);
  const crossedIncomeByPerc = ((crossedIncomeBy / income) * 100).toFixed(2);

  return (
    <StyledFormRow>
      <H4>Total savings</H4>
      {!isLimitCrossed && !isIncomeCrossed && (
        <p>
          Total savings:{" "}
          <StyledStatsSpan color={incomeColor}>
            {currency} {sumSaved.toFixed(2)}{" "}
          </StyledStatsSpan>
          <StyledStatsSpanGreyedOut>
            ({totalSavingsPerc}% of income)
          </StyledStatsSpanGreyedOut>
        </p>
      )}
      {isLimitCrossed && !isIncomeCrossed && (
        <p>
          Your total savings this {period} despite crossing the limit:{" "}
          <StyledStatsSpan color={incomeColor}>
            {currency} {sumSaved}{" "}
          </StyledStatsSpan>
          <StyledStatsSpanGreyedOut>
            ({totalSavingsPerc}% of income)
          </StyledStatsSpanGreyedOut>
        </p>
      )}
      {isLimitCrossed && isIncomeCrossed && (
        <p>
          You have spent{" "}
          <StyledStatsSpan color={incomeColor}>
            {currency} {crossedIncomeBy}
          </StyledStatsSpan>{" "}
          <StyledStatsSpanGreyedOut>
            ({crossedIncomeByPerc}%){" "}
          </StyledStatsSpanGreyedOut>
          more than your income, which means{" "}
          <StyledStatsSpan color={incomeColor}>
            you have no savings
          </StyledStatsSpan>
          .
        </p>
      )}
      <ProgressBar
        filled={totalSavingsPerc > 0 ? totalSavingsPerc : 0}
        color={incomeColor}
      />
      <StyledStatsSpanGreyedOut size="small">
        income: {currency} {income}
      </StyledStatsSpanGreyedOut>
    </StyledFormRow>
  );
}

export default IncomeStats;
