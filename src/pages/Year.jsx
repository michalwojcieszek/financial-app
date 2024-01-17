import { useLoaderData } from "react-router-dom";
import Section from "../ui/Section";
import H3 from "../ui/H3";
import StyledFormDiv from "../ui/StyledFormDiv";
import StyledFormRow from "../ui/StyledFormRow";
import StyledStatsSpan from "../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../ui/StyledStatsSpanGreyedOut";
import ProgressBar from "../ui/ProgressBar";
import H4 from "../ui/H4";
import styled from "styled-components";

const StyledYearStatsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  list-style: none;
`;

function Year() {
  const user = useLoaderData();
  const { expenses } = user;
  const { limit, income } = user.userData;
  const monthsNum = 12;

  console.log(Object.values(expenses));

  const monthsExceedingLimit = Object.values(expenses).reduce((acc, cur) => {
    const monthlyExpenses = cur.reduce(
      (acc2, cur2) => acc2 + Number(cur2.cost),
      0
    );
    return acc + (monthlyExpenses > limit ? 1 : 0);
  }, 0);

  const sumExpenses = Object.values(expenses).reduce((acc, cur) => {
    const sumInMonth = cur.reduce((acc2, cur2) => acc2 + Number(cur2.cost), 0);
    return acc + sumInMonth;
  }, 0);

  const averageCost = (sumExpenses / monthsNum).toFixed(2);

  const sumIncomes = income * monthsNum;
  const sumLimits = limit * monthsNum;
  const sumSaved = sumIncomes - sumExpenses;
  const goalToSave = sumIncomes - sumLimits;

  const isLimitCrossed = sumLimits < sumExpenses ? true : false;
  const isIncomeCrossed = sumExpenses > sumIncomes ? true : false;

  const crossedLimitBy = sumExpenses - sumLimits;
  const crossedIncomeBy = sumExpenses - sumIncomes;
  const expensesCompLimit = ((sumExpenses / sumLimits) * 100).toFixed(2);
  const leftToSpend = sumLimits - sumExpenses;
  const totalSavings = sumIncomes - sumExpenses;
  const totalSavingsPerc = ((sumSaved / sumIncomes) * 100).toFixed(2);
  const crossedIncomeByPerc = ((crossedIncomeBy / sumIncomes) * 100).toFixed(2);

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
    <Section>
      <StyledYearStatsUl>
        <H3>Yearly stats</H3>
        {monthsExceedingLimit ? (
          <li>
            Limit has been exceeded{" "}
            <StyledStatsSpan>{monthsExceedingLimit}</StyledStatsSpan> times
          </li>
        ) : (
          <li>Limit has not been exceeded in any month</li>
        )}
        <li>
          <StyledStatsSpan>$ {sumExpenses}</StyledStatsSpan> have been spent (
          <StyledStatsSpan>$ {averageCost}</StyledStatsSpan> on average)
        </li>
        {sumSaved > 0 ? (
          <li>
            <StyledStatsSpan color={incomeColor}>$ {sumSaved}</StyledStatsSpan>{" "}
            has been saved
          </li>
        ) : (
          <StyledStatsSpan color={incomeColor}>
            No money has been saved
          </StyledStatsSpan>
        )}
      </StyledYearStatsUl>
      <StyledFormDiv>
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
              <StyledStatsSpan color={limitColor}>
                $ {leftToSpend}
              </StyledStatsSpan>{" "}
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
      </StyledFormDiv>
    </Section>
  );
}

export default Year;
