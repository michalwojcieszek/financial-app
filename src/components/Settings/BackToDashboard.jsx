import { HiArrowUturnLeft } from "react-icons/hi2";
import ButtonSecondary from "../../ui/styledComponents/ButtonSecondary";
import ButtonWithEmojiDiv from "../../ui/styledComponents/ButtonWithEmojiDiv";
import { useNavigate } from "react-router-dom";

function BackToDashboard({ id }) {
  const navigate = useNavigate();

  function handleGoBackToDashboard() {
    navigate(`/users/${id}`);
  }
  return (
    <div>
      <ButtonSecondary onClick={handleGoBackToDashboard}>
        <ButtonWithEmojiDiv>
          <HiArrowUturnLeft />
          Go back to your dashboard
        </ButtonWithEmojiDiv>
      </ButtonSecondary>
    </div>
  );
}

export default BackToDashboard;
