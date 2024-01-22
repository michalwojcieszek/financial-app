import H4 from "../ui/styledComponents/H4";
import ProgressBar from "../ui/ProgressBar";
import FormRow from "../ui/styledComponents/FormRow";
import StatsSpan from "../ui/styledComponents/StatsSpan";
import SpanGreyedOut from "../ui/styledComponents/SpanGreyedOut";

function IncomeStats({
  expense,
  income,
  incomeColor,
  isSavingsGoalAchieved,
  sumSaved,
  period,
  currency,
}) {
  const isIncomeCrossed = expense > income ? true : false;
  const crossedIncomeBy = expense - income;
  const totalSavingsPerc = (sumSaved / income) * 100;
  const crossedIncomeByPerc = (crossedIncomeBy / income) * 100;

  return (
    <FormRow>
      <H4>Total savings</H4>
      {isSavingsGoalAchieved && !isIncomeCrossed && (
        <p>
          Total savings:{" "}
          <StatsSpan color={incomeColor}>
            {currency} {sumSaved.toFixed(2)}{" "}
          </StatsSpan>
          <SpanGreyedOut>
            ({totalSavingsPerc.toFixed(2)}% of income)
          </SpanGreyedOut>
        </p>
      )}
      {!isSavingsGoalAchieved && !isIncomeCrossed && (
        <p>
          Your total savingsGoal this {period} despite crossing the limit:{" "}
          <StatsSpan color={incomeColor}>
            {currency} {sumSaved.toFixed(2)}{" "}
          </StatsSpan>
          <SpanGreyedOut>
            ({totalSavingsPerc.toFixed(2)}% of income)
          </SpanGreyedOut>
        </p>
      )}
      {!isSavingsGoalAchieved && isIncomeCrossed && (
        <p>
          You have spent{" "}
          <StatsSpan color={incomeColor}>
            {currency} {crossedIncomeBy.toFixed(2)}
          </StatsSpan>{" "}
          <SpanGreyedOut>({crossedIncomeByPerc.toFixed(2)}%) </SpanGreyedOut>
          more than your income, which means{" "}
          <StatsSpan color={incomeColor}>you have no savings</StatsSpan>.
        </p>
      )}
      <ProgressBar
        filled={totalSavingsPerc <= 0 ? 100 : totalSavingsPerc}
        color={incomeColor}
      />
      <SpanGreyedOut size="small">
        income: {currency} {income.toFixed(2)}
      </SpanGreyedOut>
    </FormRow>
  );
}

export default IncomeStats;
