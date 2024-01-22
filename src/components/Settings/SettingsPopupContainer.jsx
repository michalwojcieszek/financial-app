import styled from "styled-components";
import Section from "../../ui/Section";
import { HiOutlinePower, HiXMark } from "react-icons/hi2";
import StyledButtonDeleteAccount from "../../ui/StyledButtonDeleteAccount";
import StyledButtonWithEmojiDiv from "../../ui/StyledButtonWithEmojiDiv";
import { useApp } from "../../contexts/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteAccount } from "../../hooks/UsersDataAPI/apiFetching";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

const StyledPopupContainerDiv = styled.div`
  /* display: none; */
  display: ${(props) =>
    props.isSettingsPopupOpen === "true" ? "block" : "none"};
  /* props.$isSettingsPopupOpen.toString() === "true" ? "block" : "none"}; */
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
  const { isSettingsPopupOpen, setIsSettingsPopupOpen, setIsAuthenticated } =
    useApp();
  const [isLoading, setIsLoading] = useState(false);

  function handleClickBackground(e) {
    if (e.target === e.currentTarget) setIsSettingsPopupOpen(false);
  }

  async function confirmDeleteAccount() {
    setIsLoading(true);
    //deleting from API
    await deleteAccount(id);
    //closing the popup
    setIsSettingsPopupOpen(false);
    //same as logging out
    setIsAuthenticated(false);
    navigate("/");

    setIsLoading(false);
    toast.success("You have successfully deleted your account");
  }

  if (isLoading) return <Spinner />;

  return (
    <StyledPopupContainerDiv
      isSettingsPopupOpen={isSettingsPopupOpen ? "true" : "false"}
      onClick={handleClickBackground}
    >
      <StyledConfirmDiv>
        <Section>
          <StyledCloseIcon onClick={() => setIsSettingsPopupOpen(false)} />
          <StyledParagraphBig>
            Are you sure to delete the account?
          </StyledParagraphBig>
          <StyledParagraphSmall>
            Your will lose all your data.
          </StyledParagraphSmall>
          <StyledButtonDeleteAccount onClick={confirmDeleteAccount}>
            <StyledButtonWithEmojiDiv>
              <StyledPowerIcon />
              Delete account anyway
            </StyledButtonWithEmojiDiv>
          </StyledButtonDeleteAccount>
        </Section>
      </StyledConfirmDiv>
    </StyledPopupContainerDiv>
  );
}

export default SettingsPopupContainer;
