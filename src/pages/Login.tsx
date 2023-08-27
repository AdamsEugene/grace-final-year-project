/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, forwardRef } from "react";
import { Form, ButtonToolbar, Button, Stack, Message, Schema } from "rsuite";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../_shared/services/fireBase";
import Card from "../_shared/components/Card";

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
});

const TextField = forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

export default function Login() {
  const formRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check() && handleCheckEmail()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
    login();
  };

  const handleCheckEmail = () => {
    let error = true;
    formRef.current.checkForField("email", (checkResult: any) => {
      error = checkResult.hasError;
    });
    return error;
  };

  const navigate = useNavigate();

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, formValue.email, formValue.password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // navigate("/");
        console.log(user);
        // ...
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        setErrMsg(errorMessage);
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        spacing={6}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card title={"Login"} style={{ width: "600px" }}>
          <Form
            ref={formRef}
            onChange={setFormValue as any}
            // onCheck={setFormError}
            formValue={formValue}
            model={model}
            fluid
          >
            <TextField
              name="email"
              label="Email"
              // defaultValue={auth.currentUser?.email}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              autoComplete="off"
            />
            <ButtonToolbar>
              <Button
                appearance="primary"
                color="cyan"
                onClick={handleSubmit}
                loading={loading}
              >
                Submit
              </Button>
              <Button
                appearance="primary"
                color="violet"
                onClick={() => navigate("/signup")}
              >
                Signup Instead
              </Button>
            </ButtonToolbar>
          </Form>
          <div style={{ marginTop: "16px" }}></div>
          {errMsg && <Message type="error">{errMsg}</Message>}
        </Card>
      </Stack>
    </div>
  );
}
