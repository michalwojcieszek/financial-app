import { useNavigate, useRouteError } from "react-router-dom";
import Section from "../ui/styledComponents/Section";
import H2 from "../ui/styledComponents/H2";
import ButtonUnderline from "../ui/styledComponents/ButtonUnderline";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Section>
      <H2>Something went wrong</H2>
      <p>{error.data || error.message}</p>
      <ButtonUnderline onClick={() => navigate(-1)}>
        &larr; Go back
      </ButtonUnderline>
    </Section>
  );
}

export default Error;
