import H4 from "../ui/styledComponents/H4";
import ProgressBar from "../ui/ProgressBar";
import FormRow from "../ui/styledComponents/FormRow";
import StatsSpan from "../ui/styledComponents/StatsSpan";
import SpanGreyedOut from "../ui/styledComponents/SpanGreyedOut";

function LimitStats({
  sumExpenses,
  savingsGoal,
  isSavingsGoalAchieved,
  period,
  currency,
  sumSaved,
  income,
}) {
  const limit = income - savingsGoal;
  const leftToSpendLimit = limit - sumExpenses;
  const savedPercOfGoal = (leftToSpendLimit / limit) * 100;
  // const savedPercOfGoal = (sumSaved / savingsGoal) * 100;
  const crossedLimitBy = savingsGoal - sumSaved;

  let savingsGoalColor;
  switch (true) {
    case savedPercOfGoal < 0:
      savingsGoalColor = "--stats-red";
      break;
    case savedPercOfGoal >= 100:
      savingsGoalColor = "--stats-green";
      break;
    case savedPercOfGoal >= 25:
      savingsGoalColor = "--stats-yellow";
      break;
    case savedPercOfGoal < 25:
      savingsGoalColor = "--stats-orange";
      break;
    default:
      savingsGoalColor = "--color-blue-700";
      break;
  }
  return (
    <FormRow>
      <H4>Limit tracking</H4>
      {!isSavingsGoalAchieved && crossedLimitBy > 0 && (
        <p>
          Crossed the savings goal by{" "}
          <StatsSpan color={savingsGoalColor}>
            {currency} {crossedLimitBy.toFixed(2)}
          </StatsSpan>
        </p>
      )}
      {!isSavingsGoalAchieved && crossedLimitBy === 0 && (
        <p>You have no money to spend if you do not want to cross the limit.</p>
      )}
      {isSavingsGoalAchieved && (
        <p>
          <StatsSpan color={savingsGoalColor}>
            {currency} {leftToSpendLimit.toFixed(2)}
          </StatsSpan>{" "}
          available in order to save{" "}
          <StatsSpan color="--color-blue-700">
            {currency} {savingsGoal.toFixed(2)}
          </StatsSpan>{" "}
        </p>
      )}
      <p>
        Expenses this {period}:
        <StatsSpan color={savingsGoalColor}>
          {" "}
          {currency} {sumExpenses.toFixed(2)}
        </StatsSpan>{" "}
        <SpanGreyedOut>
          (
          {savedPercOfGoal <= 0
            ? (100 + Math.abs(savedPercOfGoal)).toFixed(2)
            : savedPercOfGoal.toFixed(2)}
          % of the limit)
        </SpanGreyedOut>
      </p>
      <ProgressBar
        filled={savedPercOfGoal <= 0 ? 100 : savedPercOfGoal}
        color={savingsGoalColor}
      />
      <SpanGreyedOut size="small">
        limit of expenses: {currency} {limit.toFixed(2)}
      </SpanGreyedOut>
    </FormRow>
  );
}

export default LimitStats;
