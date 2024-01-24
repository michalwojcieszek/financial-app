import styled, { css } from "styled-components";
import Section from "../../ui/styledComponents/Section";
import { HiOutlinePower, HiXMark } from "react-icons/hi2";
import ButtonDeleteAccount from "../../ui/styledComponents/ButtonDeleteAccount";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteAccount } from "../../hooks/usersDataAPI/apiFetching";
import { useGlobal } from "../../contexts/GlobalContext";

const StyledPopupContainerDiv = styled.div`
  ${({ isSettingsPopupOpen }) =>
    isSettingsPopupOpen !== "true" &&
    css`
      display: none;
    `}

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(
    70,
    84,
    109,
    0.2
  ); /* Slate shade with 20% transparency */
  backdrop-filter: blur(6px); /* Small backdrop blur effect */
`;

const StyledConfirmDiv = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const StyledCloseIcon = styled(HiXMark)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: var(--color-grey-500);
  font-size: 2rem;
  cursor: pointer;
`;

const StyledPowerIcon = styled(HiOutlinePower)`
  flex-shrink: 0;
`;

const StyledParagraphBig = styled.p`
  margin-top: 3rem;
  font-size: 2rem;
`;

const StyledParagraphSmall = styled.p`
  margin-bottom: 3rem;
`;

function SettingsPopupContainer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    unAuthenticate,
    isSettingsPopupOpen,
    closeSettingsPopup,
    loading,
    notLoading,
  } = useGlobal();

  function handleClickBackground(e) {
    if (e.target === e.currentTarget) closeSettingsPopup();
  }

  async function confirmDeleteAccount() {
    loading();
    //deleting from API
    await deleteAccount(id);
    //closing the popup
    closeSettingsPopup();
    //same as logging out
    unAuthenticate();
    navigate("/");

    notLoading();
    toast.success("You have successfully deleted your account");
  }

  return (
    <StyledPopupContainerDiv
      isSettingsPopupOpen={isSettingsPopupOpen ? "true" : "false"}
      onClick={handleClickBackground}
    >
      <StyledConfirmDiv>
        <Section>
          <StyledCloseIcon onClick={() => closeSettingsPopup()} />
          <StyledParagraphBig>
            Are you sure to delete the account?
          </StyledParagraphBig>
          <StyledParagraphSmall>
            Your will lose all your data.
          </StyledParagraphSmall>
          <ButtonDeleteAccount onClick={confirmDeleteAccount}>
            <ButtonWithEmojiDiv>
              <StyledPowerIcon />
              Delete account anyway
            </ButtonWithEmojiDiv>
          </ButtonDeleteAccount>
        </Section>
      </StyledConfirmDiv>
    </StyledPopupContainerDiv>
  );
}

export default SettingsPopupContainer;
