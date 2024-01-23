import { HiOutlineTrash } from "react-icons/hi2";
import ButtonDeleteAccount from "../../ui/styledComponents/ButtonDeleteAccount";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import DivDeleteButton from "../../ui/styledComponents/DivDeleteButton";

function DeleteAccount({ openSettingsPopup }) {
  return (
    <DivDeleteButton>
      <ButtonDeleteAccount onClick={() => openSettingsPopup()}>
        <ButtonWithEmojiDiv>
          <HiOutlineTrash />
          Delete your account
        </ButtonWithEmojiDiv>
      </ButtonDeleteAccount>
    </DivDeleteButton>
  );
}

export default DeleteAccount;
