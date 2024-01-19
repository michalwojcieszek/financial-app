import { HiOutlineTrash } from "react-icons/hi2";
import StyledButtonDeleteAccount from "../../ui/StyledButtonDeleteAccount";
import StyledButtonWithEmojiDiv from "../../ui/StyledButtonWithEmojiDiv";
import StyledDivDeleteButton from "../../ui/StyledDivDeleteButton";

function DeleteAccount({ setIsSettingsPopupOpen }) {
  return (
    <StyledDivDeleteButton>
      <StyledButtonDeleteAccount onClick={() => setIsSettingsPopupOpen(true)}>
        <StyledButtonWithEmojiDiv>
          <HiOutlineTrash />
          Delete your account
        </StyledButtonWithEmojiDiv>
      </StyledButtonDeleteAccount>
    </StyledDivDeleteButton>
  );
}

export default DeleteAccount;
