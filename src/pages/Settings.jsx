import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import H2 from "../ui/H2";
import Section from "../ui/Section";
import StyledInput from "../ui/StyledInput";
import StyledButtonSecondary from "../ui/StyledButtonSecondary";
import StyledButtonWithEmojiDiv from "../ui/StyledButtonWithEmojiDiv";
import {
  HiAdjustmentsVertical,
  HiArrowUturnLeft,
  HiOutlineTrash,
} from "react-icons/hi2";
import StyledFormRow from "../ui/StyledFormRow";
import { useState } from "react";
import toast from "react-hot-toast";
import { changeIncomeAndLimit } from "../hooks/apiHandlers";
import StyledButtonDeleteAccount from "../ui/StyledButtonDeleteAccount";
import StyledFormDiv from "../ui/StyledFormDiv";
import StyledDivDeleteButton from "../ui/StyledDivDeleteButton";

function Settings() {
  const user = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { limit, income } = user.userData;

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
  }

  function handleGoBackToDashboard() {
    navigate(`/users/${id}`);
  }

  return (
    <Section>
      <StyledFormDiv>
        <div>
          <StyledButtonSecondary onClick={handleGoBackToDashboard}>
            <StyledButtonWithEmojiDiv>
              <HiArrowUturnLeft />
              Go back to your dashboard
            </StyledButtonWithEmojiDiv>
          </StyledButtonSecondary>
        </div>
        <H2>Settings</H2>
      </StyledFormDiv>
      <StyledFormDiv>
        <StyledFormRow>
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
        <StyledDivDeleteButton>
          <StyledButtonDeleteAccount onClick={handleSaveChanges}>
            <StyledButtonWithEmojiDiv>
              <HiOutlineTrash />
              Delete your account
            </StyledButtonWithEmojiDiv>
          </StyledButtonDeleteAccount>
        </StyledDivDeleteButton>
      </StyledFormDiv>
    </Section>
  );
}

export default Settings;
