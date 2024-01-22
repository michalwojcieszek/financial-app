import styled from "styled-components";

const StyledFooter = styled.footer`
  background: var(--gradient-default);
  padding: 1rem 2rem;
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: auto 1fr;
  width: 100%;
  /* position: absolute; */
  /* bottom: 0; */
  /* height: 5rem; */
`;

const StyledCopyright = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledCopyright>
          {" "}
          &copy; Copyright {new Date().getFullYear()} by Michal Wojcieszek
        </StyledCopyright>
      </StyledFooter>
    </>
  );
}

export default Footer;
