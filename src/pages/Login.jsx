import toast from "react-hot-toast";
import ButtonUnderline from "../ui/styledComponents/ButtonUnderline";
import H2 from "../ui/styledComponents/H2";
import { useApp } from "../contexts/AppContext";
import { postData } from "../hooks/UsersDataAPI/apiFetching";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import userTemplate from "../hooks/userTemplate";
import Spinner from "../ui/Spinner";
import Section from "../ui/styledComponents/Section";
import Input from "../ui/styledComponents/Input";
import FormRow from "../ui/styledComponents/FormRow";
import ButtonPrimary from "../ui/styledComponents/ButtonPrimary";
import FormDiv from "../ui/styledComponents/FormDiv";
import { HiOutlineUser, HiOutlineUserPlus } from "react-icons/hi2";
import ButtonWithEmojiDiv from "../ui/styledComponents/ButtonWithEmojiDiv";
import { SelectCurrency } from "../ui/styledComponents/SelectCurrency";

function Login() {
  const allUsers = useLoaderData();
  const navigate = useNavigate();
  const {
    ifUserHaveAccount,
    setIfUserHaveAccount,
    name,
    setName,
    password,
    setPassword,
    savingsGoal,
    setSavingsGoal,
    income,
    setIncome,
    setIsAuthenticated,
    isLoading,
    currency,
    setCurrency,
  } = useApp();

  function clearInputs() {
    setName("");
    setPassword("");
    setIncome("");
    setSavingsGoal("");
  }

  function handleUserValidated(id) {
    //going to dashboard
    navigate(`/users/${id}`);
    //clean inputs
    clearInputs();
    setIsAuthenticated(true);
    toast.success(`Welcome to the BudgetMaster 🙌`);
  }

  async function handleSignUp() {
    if (!name || !password || !income || !savingsGoal) {
      toast.error(`Fill all the fields`);
      return;
    }

    //Check if name is unique
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

    if (password.length < 5) {
      toast.error(`Password need to have at least 5 characters`);
      return;
    }

    if (+income < 0 || +savingsGoal < 0) {
      toast.error(`Income and savingsGoal cannot be less than zero`);
      return;
    }

    if (+income < +savingsGoal) {
      toast.error(
        `It is unfortunately impossible to save more than you earn 😊`
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
        savingsGoal,
        currency,
      },
    };
    const newUserId = await postData(newUser);
    handleUserValidated(newUserId);
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
    handleUserValidated(existingUserId);
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
          <FormDiv>
            <FormRow>
              <label>Name</label>
              <Input
                size="large"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <label>Password</label>
              <Input
                size="large"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormRow>
            {!ifUserHaveAccount ? (
              <>
                <FormRow>
                  <label>Monthly income</label>
                  <Input
                    size="large"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </FormRow>
                <FormRow>
                  <label>Monthly savings goal</label>
                  <Input
                    size="large"
                    type="number"
                    value={savingsGoal}
                    onChange={(e) => setSavingsGoal(e.target.value)}
                  />
                </FormRow>
                <FormRow>
                  <label>Select currency</label>
                  <SelectCurrency
                    onChange={(e) => setCurrency(e.target.value)}
                    defaultValue="USD"
                  >
                    <option value="USD">USD (🇺🇸)</option>
                    <option value="EUR">EUR (🇪🇺)</option>
                    <option value="GBP">GBP (🇬🇧)</option>
                    <option value="CHF">CHF (🇨🇭)</option>
                    <option value="PLN">PLN (🇵🇱)</option>
                  </SelectCurrency>
                </FormRow>
              </>
            ) : (
              ""
            )}
            <div>
              {ifUserHaveAccount ? (
                <ButtonPrimary>
                  <ButtonWithEmojiDiv>
                    <HiOutlineUser />
                    LOG IN
                  </ButtonWithEmojiDiv>
                </ButtonPrimary>
              ) : (
                // <Button onClick={handleLogIn}>LOG IN</Button>
                <ButtonPrimary>
                  <ButtonWithEmojiDiv>
                    <HiOutlineUserPlus />
                    SIGN UP
                  </ButtonWithEmojiDiv>
                </ButtonPrimary>
                // <Button onClick={handleSignUp}>SIGN UP</Button>
              )}
            </div>
          </FormDiv>
        </>
      </form>
    </Section>
  );
}
export default Login;
