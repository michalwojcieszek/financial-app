import { HiOutlineTrash } from "react-icons/hi2";
import ButtonDeleteAccount from "../../ui/styledComponents/ButtonDeleteAccount";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import DivDeleteButton from "../../ui/styledComponents/DivDeleteButton";

function DeleteAccount({ setIsSettingsPopupOpen }) {
  return (
    <DivDeleteButton>
      <ButtonDeleteAccount onClick={() => setIsSettingsPopupOpen(true)}>
        <ButtonWithEmojiDiv>
          <HiOutlineTrash />
          Delete your account
        </ButtonWithEmojiDiv>
      </ButtonDeleteAccount>
    </DivDeleteButton>
  );
}

export default DeleteAccount;
