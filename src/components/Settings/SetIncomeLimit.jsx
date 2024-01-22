import { useState } from "react";
import { changeIncomeAndLimit } from "../../hooks/UsersDataAPI/apiHandlers";
import toast from "react-hot-toast";
import Input from "../../ui/styledComponents/Input";
import FormRow from "../../ui/styledComponents/FormRow";
import ButtonSecondary from "../../ui/styledComponents/ButtonSecondary";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import H3 from "../../ui/styledComponents/H3";

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
      <FormRow>
        <H3>Set new income and limit</H3>
        <label>Set new monthly income</label>
        <Input
          type="number"
          size="large"
          defaultValue={income}
          onChange={(e) => setNewIncome(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <label>Set new limit of expenses</label>
        <Input
          type="number"
          size="large"
          defaultValue={limit}
          onChange={(e) => setNewLimit(e.target.value)}
        />
      </FormRow>
      <div>
        <ButtonSecondary onClick={handleSaveChanges}>
          <ButtonWithEmojiDiv>
            <HiAdjustmentsVertical />
            Save changes
          </ButtonWithEmojiDiv>
        </ButtonSecondary>
      </div>
    </>
  );
}

export default SetIncomeLimit;
