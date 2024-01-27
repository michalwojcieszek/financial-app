import { useState } from "react";
import { changeIncomeAndLimit } from "../../hooks/usersDataAPI/apiHandlers";
import toast from "react-hot-toast";
import Input from "../../ui/styledComponents/Input";
import FormRow from "../../ui/styledComponents/FormRow";
import ButtonSecondary from "../../ui/styledComponents/ButtonSecondary";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import H3 from "../../ui/styledComponents/H3";

function SetIncomeLimit({ income, savingsGoal, id }) {
  const [newIncome, setNewIncome] = useState(income);
  const [newLimit, setNewLimit] = useState(savingsGoal);

  async function handleSaveChanges() {
    if (income === newIncome && savingsGoal === newLimit) {
      toast.error(
        `New savingsGoal and income are the same as previously. No change has been made.`
      );
      return;
    }
    await changeIncomeAndLimit(id, newIncome, newLimit);
    toast.success("Your change has been saved");
  }

  return (
    <>
      <FormRow>
        <H3>Set new income and savingsGoal</H3>
        <label>Set new monthly income</label>
        <Input
          type="number"
          size="large"
          defaultValue={income}
          onChange={(e) => setNewIncome(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <label>Set new savingsGoal of expenses</label>
        <Input
          type="number"
          size="large"
          defaultValue={savingsGoal}
          onChange={(e) => setNewLimit(e.target.value)}
        />
      </FormRow>
      <ButtonSecondary onClick={handleSaveChanges}>
        <ButtonWithEmojiDiv>
          <HiAdjustmentsVertical />
          Save changes
        </ButtonWithEmojiDiv>
      </ButtonSecondary>
    </>
  );
}

export default SetIncomeLimit;
