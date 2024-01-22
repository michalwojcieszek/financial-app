import { useState } from "react";
import { changeIncomeAndLimit } from "../../hooks/UsersDataAPI/apiHandlers";
import toast from "react-hot-toast";
import StyledInput from "../../ui/StyledInput";
import StyledFormRow from "../../ui/StyledFormRow";
import StyledButtonSecondary from "../../ui/StyledButtonSecondary";
import StyledButtonWithEmojiDiv from "../../ui/StyledButtonWithEmojiDiv";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import H3 from "../../ui/H3";

function SetIncomeLimit({ income, limit, id }) {
  const [newIncome, setNewIncome] = useState(income);
  const [newLimit, setNewLimit] = useState(limit);

  async function handleSaveChanges() {
    if (income === newIncome && limit === newLimit) {
      toast.error(
        `New limit and income are the same as previously. No change has been made.`
      );
      return;
    }
    await changeIncomeAndLimit(id, newIncome, newLimit);
    toast.success("Your change has been saved");
  }

  return (
    <>
      <StyledFormRow>
        <H3>Set new income and limit</H3>
        <label>Set new monthly income</label>
        <StyledInput
          type="number"
          size="large"
          defaultValue={income}
          onChange={(e) => setNewIncome(e.target.value)}
        />
      </StyledFormRow>
      <StyledFormRow>
        <label>Set new limit of expenses</label>
        <StyledInput
          type="number"
          size="large"
          defaultValue={limit}
          onChange={(e) => setNewLimit(e.target.value)}
        />
      </StyledFormRow>
      <div>
        <StyledButtonSecondary onClick={handleSaveChanges}>
          <StyledButtonWithEmojiDiv>
            <HiAdjustmentsVertical />
            Save changes
          </StyledButtonWithEmojiDiv>
        </StyledButtonSecondary>
      </div>
    </>
  );
}

export default SetIncomeLimit;
