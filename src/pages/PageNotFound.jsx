import H2 from "../ui/styledComponents/H2";
import Section from "../ui/styledComponents/Section";
import ButtonUnderline from "../ui/styledComponents/ButtonUnderline";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Section>
      <H2>Page has not been found</H2>
      <ButtonUnderline onClick={() => navigate("/")}>
        Go to the App
      </ButtonUnderline>
    </Section>
  );
}

export default PageNotFound;
