import styled from "styled-components";
import { useApp } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import StyledButtonWithEmojiDiv from "../ui/StyledButtonWithEmojiDiv";

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
  font-size: 2.4rem;
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

  function logOut() {
    setIsAuthenticated(false);
    navigate("/");
    toast.success("You have successfully logged out");
  }

  return (
    <>
      <StyledHeader>
        <StyledH1>💰 Your financial app.</StyledH1>
        <UserInfo>
          {/* <HelloParagraph>👋 Hello Jonas </HelloParagraph> */}
          {isAuthenticated ? (
            <LogOutButton onClick={logOut}>
              <StyledButtonWithEmojiDiv>
                <HiArrowRightOnRectangle style={{ flexShrink: "0" }} />
                LOG OUT
              </StyledButtonWithEmojiDiv>
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
