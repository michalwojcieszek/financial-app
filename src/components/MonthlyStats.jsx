import { useNavigate, useParams } from "react-router-dom";
import ButtonUnderline from "../ui/ButtonUnderline";
import H3 from "../ui/H3";
import Section from "../ui/Section";
import StyledFormRow from "../ui/StyledFormRow";
import StyledFormDiv from "../ui/StyledFormDiv";
import styled from "styled-components";
import ProgressBar from "../ui/ProgressBar";
import { useState } from "react";
import StyledStatsSpan from "../ui/StyledStatsSpan";
import StyledStatsSpanGreyedOut from "../ui/StyledStatsSpanGreyedOut";
import H4 from "../ui/H4";

const StyledProgress = styled.progress`
  flex-grow: 1;
  color: red;
  background-color: red;
  border-radius: 2px;
`;

function MonthlyStats({ userData, expensesThisMonth, monthString }) {
  const { income, limit } = userData;
  const { id } = useParams();
  const navigate = useNavigate();

  const allExpensesThisMonthArray = expensesThisMonth.map(
    (expense) => +expense.cost
  );

  const sumExpensesThisMonth = allExpensesThisMonthArray.reduce(
    (acc, cur) => acc + cur,
    0
  );

  const isLimitCrossed = sumExpensesThisMonth > limit ? true : false;
  const isIncomeCrossed = sumExpensesThisMonth > income ? true : false;

  const goalToSave = income - limit;
  const expensesCompLimit = ((sumExpensesThisMonth / limit) * 100).toFixed(2);
  const crossedLimitBy = sumExpensesThisMonth - limit;
  const leftToSpend = limit - sumExpensesThisMonth;
  const totalSavings = income - sumExpensesThisMonth;
  const totalSavingsPerc = ((totalSavings / income) * 100).toFixed(2);
  const crossedIncomeBy = sumExpensesThisMonth - income;
  const crossedIncomeByPerc = ((crossedIncomeBy / income) * 100).toFixed(2);

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

  function handleGoToSettings() {
    navigate(`/users/${id}/settings`);
  }

  if (!expensesThisMonth.length) return;

  return (
    <Section>
      <H3>State of the budget in {monthString}</H3>
      <div>
        Your goal is to save{" "}
        <StyledStatsSpan color="--color-blue-700">
          $ {goalToSave}
        </StyledStatsSpan>{" "}
        each month.{" "}
        <p>
          If you want to change it, then{" "}
          <ButtonUnderline onClick={handleGoToSettings}>
            GO TO SETTINGS
          </ButtonUnderline>
        </p>
      </div>
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
              left to spend not cross the limit.
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
      </StyledFormDiv>
    </Section>
  );
}

export default MonthlyStats;
