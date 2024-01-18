import H4 from "../../ui/H4";
import ProgressBar from "../../ui/ProgressBar";
import StyledFormRow from "../../ui/StyledFormRow";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../../ui/StyledStatsSpanGreyedOut";

function MonthlyIncomeStats({
  sumExpensesThisMonth,
  income,
  goalToSave,
  isLimitCrossed,
}) {
  const isIncomeCrossed = sumExpensesThisMonth > income ? true : false;
  const totalSavings = income - sumExpensesThisMonth;
  const totalSavingsPerc = ((totalSavings / income) * 100).toFixed(2);
  const crossedIncomeBy = sumExpensesThisMonth - income;
  const crossedIncomeByPerc = ((crossedIncomeBy / income) * 100).toFixed(2);

  let incomeColor;
  switch (true) {
    case totalSavings < goalToSave * 0.25:
      incomeColor = "--stats-red";
      break;
    case totalSavings < goalToSave * 0.5:
      incomeColor = "--stats-orange";
      break;
    case totalSavings < goalToSave:
      incomeColor = "--stats-yellow";
      break;
    case totalSavings >= goalToSave:
      incomeColor = "--stats-green";
      break;
    default:
      incomeColor = "--color-blue-700";
      break;
  }
  return (
    <StyledFormRow>
      <H4>Total savings</H4>
      {!isLimitCrossed && !isIncomeCrossed && (
        <p>
          Total savings:{" "}
          <StyledStatsSpan color={incomeColor}>
            $ {totalSavings}{" "}
          </StyledStatsSpan>
          <StyledStatsSpanGreyedOut>
            ({totalSavingsPerc}% of income)
          </StyledStatsSpanGreyedOut>
        </p>
      )}
      {isLimitCrossed && !isIncomeCrossed && (
        <p>
          Your total savings this month despite crossing the limit:{" "}
          <StyledStatsSpan color={incomeColor}>
            $ {totalSavings}{" "}
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
            $ {crossedIncomeBy}
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
        income: $ {income}
      </StyledStatsSpanGreyedOut>
    </StyledFormRow>
  );
}

export default MonthlyIncomeStats;
