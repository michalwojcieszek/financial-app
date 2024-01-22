import H2 from "../ui/styledComponents/H2";
import Section from "../ui/styledComponents/Section";
import ButtonUnderline from "../ui/styledComponents/ButtonUnderline";
import { useLocation, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Section>
      <H2>Page has not been found</H2>
      <p style={{ marginBottom: "3rem" }}>
        URL "{`${window.location.origin}${location.pathname}${location.search}`}
        " is not available
      </p>
      <ButtonUnderline onClick={() => navigate("/")}>
        Go to the App
      </ButtonUnderline>
    </Section>
  );
}

export default PageNotFound;
