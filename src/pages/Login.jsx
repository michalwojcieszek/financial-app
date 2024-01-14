import Button from "../components/ButtonPrimary";
import ButtonUnderline from "../components/ButtonUnderline";
import { useApp } from "../contexts/AppContext";
import { FormDiv, FormRow, Input } from "./../login/loginStyles";

function Login() {
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
  } = useApp();

  return (
    <div>
      {ifUserHaveAccount ? (
        <>
          <p>LOGGING IN</p>
          <p>
            If you do not have your own account click here to sign up &darr;
          </p>
          <button onClick={() => setIfUserHaveAccount(false)}>
            go to sign up
          </button>
        </>
      ) : (
        <>
          <p>SIGNING UP</p>
          <p>
            If you already have your own account click here to log in &darr;
          </p>
          <ButtonUnderline onClick={() => setIfUserHaveAccount(true)}>
            go to log in
          </ButtonUnderline>
        </>
      )}
      <>
        <FormDiv>
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
              type="text"
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
        </FormDiv>
        {ifUserHaveAccount ? (
          <Button variation="primary" size="large">
            LOG IN
          </Button>
        ) : (
          <Button>SIGN UP</Button>
        )}
      </>
    </div>
  );
}
export default Login;
