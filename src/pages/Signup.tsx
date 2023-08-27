/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, forwardRef, useRef } from "react";
import { Form, ButtonToolbar, Button, Stack, Schema, Message } from "rsuite";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../_shared/services/fireBase";
import Card from "../_shared/components/Card";

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType()
    .isRequired("This field is required.")
    .isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),

  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
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

export default function Signup() {
  const formRef = useRef<any>();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check() && handleCheckEmail()) {
      console.error("Form Error");
      return;
    }
    signup();
  };

  const handleCheckEmail = () => {
    let error = true;
    formRef.current.checkForField("email", (checkResult: any) => {
      error = checkResult.hasError;
    });
    return error;
  };

  const navigate = useNavigate();

  const signup = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        auth.currentUser &&
          updateProfile(auth.currentUser, {
            displayName: formValue.name,
          })
            .then(() => {
              setLoading(false);
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        setFormError(errorMessage);
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
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card title={"Signup"} style={{ width: "600px" }}>
          <Form
            ref={formRef}
            onChange={setFormValue as any}
            // onCheck={setFormError}
            formValue={formValue}
            model={model}
            fluid
          >
            <TextField name="name" label="Username" />
            <TextField name="email" label="Email" />
            <TextField
              name="password"
              label="Password"
              type="password"
              autoComplete="off"
            />
            <TextField
              name="verifyPassword"
              label="Verify password"
              type="password"
              autoComplete="off"
            />

            <ButtonToolbar>
              <Button
                appearance="primary"
                onClick={handleSubmit}
                loading={loading}
              >
                Submit
              </Button>
              <Button onClick={() => navigate("/login")}>Login Instead</Button>
            </ButtonToolbar>
          </Form>
          <div style={{ marginTop: "16px" }}></div>
          {formError && <Message type="error">{formError}</Message>}
        </Card>
      </Stack>
    </div>
  );
}
