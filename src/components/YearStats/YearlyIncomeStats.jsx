import StyledFormRow from "../../ui/StyledFormRow";
import StyledStatsSpan from "../../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../../ui/StyledStatsSpanGreyedOut";
import ProgressBar from "../../ui/ProgressBar";
import H4 from "../../ui/H4";

function YearlyIncomeStats({
  sumExpenses,
  sumIncomes,
  incomeColor,
  totalSavings,
  isLimitCrossed,
  sumSaved,
}) {
  const isIncomeCrossed = sumExpenses > sumIncomes ? true : false;
  const crossedIncomeBy = sumExpenses - sumIncomes;
  const totalSavingsPerc = ((sumSaved / sumIncomes) * 100).toFixed(2);
  const crossedIncomeByPerc = ((crossedIncomeBy / sumIncomes) * 100).toFixed(2);

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
          Your total savings this year despite crossing the limit:{" "}
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
        income: $ {sumIncomes}
      </StyledStatsSpanGreyedOut>
    </StyledFormRow>
  );
}

export default YearlyIncomeStats;
