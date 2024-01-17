import toast from "react-hot-toast";
import ButtonUnderline from "../ui/ButtonUnderline";
import H2 from "../ui/H2";
import { useApp } from "../contexts/AppContext";
import { getData, postData } from "../hooks/apiFetching";
import { useNavigate } from "react-router-dom";
import userTemplate from "../hooks/userTemplate";
import Spinner from "../ui/Spinner";
import Section from "../ui/Section";
import StyledInput from "../ui/StyledInput";
import StyledFormRow from "../ui/StyledFormRow";
import StyledButtonPrimary from "../ui/StyledButtonPrimary";
import StyledFormDiv from "../ui/StyledFormDiv";
import { HiOutlineUser, HiOutlineUserPlus } from "react-icons/hi2";
import StyledButtonWithEmojiDiv from "../ui/StyledButtonWithEmojiDiv";

function Login() {
  const navigate = useNavigate();
  const {
    ifUserHaveAccount,
    setIfUserHaveAccount,
    name,
    setName,
    password,
    setPassword,
    limit,
    setLimit,
    income,
    setIncome,
    setIsAuthenticated,
    isLoading,
    setIsLoading,
  } = useApp();

  function clearInputs() {
    setName("");
    setPassword("");
    setIncome("");
    setLimit("");
  }

  async function handleSignUp() {
    if (!name || !password || !income || !limit) {
      toast.error(`Fill all the fields`);
      return;
    }
    if (password.length < 5) {
      toast.error(`Password need to have at least 5 characters`);
      return;
    }

    if (income < 0 || limit < 0) {
      toast.error(`Income and limit cannot be less than zero`);
      return;
    }

    if (income < limit) {
      toast.error(
        `In order to save money you cannot spend more than you earn 😊`
      );
      return;
    }

    setIsLoading(true);
    const allUsers = await getData();
    setIsLoading(false);

    //Check if name is unique
    console.log(allUsers);
    if (
      allUsers.some(
        (user) => user.userData.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(
        `User with this name already exists. Please enter an unique name.`
      );
      return;
    }

    //Adding new user
    const newUser = {
      ...userTemplate,
      userData: {
        ...userTemplate.userData,
        name,
        password,
        income,
        limit,
      },
    };
    const newUserId = await postData(newUser);
    navigate(`/users/${newUserId}`);
    //clean inputs
    clearInputs();
    setIsAuthenticated(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (ifUserHaveAccount) handleLogIn();
    if (!ifUserHaveAccount) handleSignUp();
  }

  async function handleLogIn() {
    if (!name || !password) {
      toast.error(`Fill all the fields`);
      return;
    }
    setIsLoading(true);
    const allUsers = await getData();
    setIsLoading(false);

    //Check if userName exists
    if (
      !allUsers.some(
        (user) => user.userData.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`There is no user with this name.`);
      return;
    }
    //Finding the data of the user
    const existingUser = allUsers.find(
      (user) => user.userData.name.toLowerCase() === name.toLowerCase()
    );

    //checking if passport is correct
    if (existingUser.userData.password !== password) {
      toast.error(`The password you provided is wrong. Try again.`);
      return;
    }
    const existingUserId = existingUser.id;
    navigate(`/users/${existingUserId}`);
    //clean inputs
    clearInputs();
    setIsAuthenticated(true);
  }

  if (isLoading) return <Spinner />;

  return (
    <Section>
      {ifUserHaveAccount ? (
        <>
          <H2>LOGGING IN</H2>
          <p>
            If you do not have your own account click here to sign up &darr;
          </p>
          <ButtonUnderline onClick={() => setIfUserHaveAccount(false)}>
            GO TO SIGN UP
          </ButtonUnderline>
        </>
      ) : (
        <>
          <H2>SIGNING UP</H2>
          <p>
            If you already have your own account click here to log in &darr;
          </p>
          <ButtonUnderline onClick={() => setIfUserHaveAccount(true)}>
            GO TO LOG IN
          </ButtonUnderline>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <>
          <StyledFormDiv>
            <StyledFormRow>
              <label>Name</label>
              <StyledInput
                size="large"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </StyledFormRow>
            <StyledFormRow>
              <label>Password</label>
              <StyledInput
                size="large"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </StyledFormRow>
            {!ifUserHaveAccount ? (
              <>
                <StyledFormRow>
                  <label>Monthly income</label>
                  <StyledInput
                    size="large"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </StyledFormRow>
                <StyledFormRow>
                  <label>Monthly limit of expenses</label>
                  <StyledInput
                    size="large"
                    type="number"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                  />
                </StyledFormRow>
              </>
            ) : (
              ""
            )}
            <div>
              {ifUserHaveAccount ? (
                <StyledButtonPrimary>
                  <StyledButtonWithEmojiDiv>
                    <HiOutlineUser />
                    LOG IN
                  </StyledButtonWithEmojiDiv>
                </StyledButtonPrimary>
              ) : (
                // <Button onClick={handleLogIn}>LOG IN</Button>
                <StyledButtonPrimary>
                  <StyledButtonWithEmojiDiv>
                    <HiOutlineUserPlus />
                    SIGN UP
                  </StyledButtonWithEmojiDiv>
                </StyledButtonPrimary>
                // <Button onClick={handleSignUp}>SIGN UP</Button>
              )}
            </div>
          </StyledFormDiv>
        </>
      </form>
    </Section>
  );
}
export default Login;
