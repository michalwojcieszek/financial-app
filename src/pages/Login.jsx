import toast from "react-hot-toast";

import Button from "../components/ButtonPrimary";
import ButtonUnderline from "../components/ButtonUnderline";
import H2 from "../components/H2";
import FormDiv from "../components/FormDiv";
import { useApp } from "../contexts/AppContext";
import Input from "../components/Input";
import FormRow from "../components/FormRow";
import { getData, postData } from "../hooks/apiFetching";
import { useNavigate } from "react-router-dom";
import userTemplate from "../hooks/userTemplate";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
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
        name: name,
        password: password,
        monthlyIncome: income,
        monthlyLimit: limit,
      },
    };
    const newUserId = await postData(newUser);
    navigate(`/users/${newUserId}`);
    //clean inputs
    clearInputs();
    setIsAuthenticated(true);
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
    <FormDiv>
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
      <>
        <div>
          <FormRow>
            <label>Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormRow>
          <FormRow>
            <label>Password</label>
            <Input
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
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </FormRow>
              <FormRow>
                <label>Monthly limit of expenditures</label>
                <Input
                  type="number"
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                />
              </FormRow>
            </>
          ) : (
            ""
          )}
        </div>
        {ifUserHaveAccount ? (
          <Button onClick={handleLogIn}>LOG IN</Button>
        ) : (
          <Button onClick={handleSignUp}>SIGN UP</Button>
        )}
      </>
    </FormDiv>
  );
}
export default Login;
