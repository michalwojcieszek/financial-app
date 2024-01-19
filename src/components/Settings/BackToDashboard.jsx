import { HiArrowUturnLeft } from "react-icons/hi2";
import StyledButtonSecondary from "../../ui/StyledButtonSecondary";
import StyledButtonWithEmojiDiv from "../../ui/StyledButtonWithEmojiDiv";
import { useNavigate } from "react-router-dom";

function BackToDashboard({ id }) {
  const navigate = useNavigate();

  function handleGoBackToDashboard() {
    navigate(`/users/${id}`);
  }
  return (
    <div>
      <StyledButtonSecondary onClick={handleGoBackToDashboard}>
        <StyledButtonWithEmojiDiv>
          <HiArrowUturnLeft />
          Go back to your dashboard
        </StyledButtonWithEmojiDiv>
      </StyledButtonSecondary>
    </div>
  );
}

export default BackToDashboard;
