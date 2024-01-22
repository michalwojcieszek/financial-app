import styled from "styled-components";
import { useApp } from "../contexts/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonWithEmojiDiv from "../ui/styledComponents/ButtonWithEmojiDiv";

const FlexHeaderDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

const FlexHeaderTextDiv = styled.div`
  display: flex;
  flex-direction: column;

  /* gap: rem; */
`;

const StyledHeader = styled.header`
  background: var(--gradient-default);
  padding: 1rem 2rem;
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: auto 1fr;
`;

const StyledH1 = styled.h1`
  font-weight: 500;
  color: white;
  font-size: 2.2rem;
  letter-spacing: 0.3rem;
  /* text-transform: uppercase; */
`;

const EmojiParagraph = styled.p`
  font-size: 3.5rem;
`;

const StyledSubtitle = styled.p`
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const UserInfo = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
`;

const LogOutButton = styled.button`
  border: none;
  font-weight: 600;
  background-color: white;
  color: var(--color-blue-700);
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  transition: background 1s;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-family: inherit;

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

function Header() {
  const { setIsAuthenticated, isAuthenticated } = useApp();
  const navigate = useNavigate();
  const { id } = useParams();

  function logOut() {
    setIsAuthenticated(false);
    navigate("/");
    toast.success("You have successfully logged out");
  }

  function handleClickTitle() {
    if (isAuthenticated) {
      navigate(`/users/${id}`);
    }
    if (!isAuthenticated) {
      navigate("/");
    }
  }

  return (
    <>
      <StyledHeader>
        <FlexHeaderDiv onClick={handleClickTitle}>
          <EmojiParagraph>💸</EmojiParagraph>
          <FlexHeaderTextDiv>
            <StyledH1>BudgetMaster</StyledH1>
            <StyledSubtitle>Mind your budget.</StyledSubtitle>
          </FlexHeaderTextDiv>
        </FlexHeaderDiv>
        <UserInfo>
          {/* <HelloParagraph>👋 Hello Jonas </HelloParagraph> */}
          {isAuthenticated ? (
            <LogOutButton onClick={logOut}>
              <ButtonWithEmojiDiv>
                <HiArrowRightOnRectangle style={{ flexShrink: "0" }} />
                LOG OUT
              </ButtonWithEmojiDiv>
            </LogOutButton>
          ) : (
            ""
          )}{" "}
        </UserInfo>
      </StyledHeader>
    </>
  );
}

export default Header;
