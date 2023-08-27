/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useRef, useState } from "react";
import { Button, ButtonToolbar, Form, Message, Schema } from "rsuite";
import { PageWrapper, Wrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import Sidebar from "../_shared/components/Sidebar";
import { updateProfile, updateEmail } from "firebase/auth";
import { auth } from "../_shared/services/fireBase";

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType()
    .isRequired("This field is required.")
    .isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  otherEmail: StringType().isEmail("Please enter a valid email address."),
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

export default function Settings() {
  const formRef = useRef<any>();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    otherEmail: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check() && handleCheckEmail()) {
      console.error("Form Error");
      return;
    }
    update();
  };

  const handleCheckEmail = () => {
    let error = true;
    formRef.current.checkForField("email", (checkResult: any) => {
      error = checkResult.hasError;
    });
    return error;
  };
  const update = () => {
    setLoading(true);
    console.log(formValue);
    if (auth.currentUser) {
      Promise.all([
        updateEmail(auth.currentUser, formValue.email),
        // updatePassword(auth.currentUser, formValue.password),
        updateProfile(auth.currentUser, {
          displayName: formValue.name,
          photoURL: formValue.otherEmail,
        }),
      ])
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log({ error });
          setLoading(false);
          setFormError(error.message);
        });
    }
  };

  return (
    <Wrapper>
      <Sidebar />
      <PageWrapper>
        <Bread name="User" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Card title={"Update Info"} style={{ width: "900px" }}>
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
              <TextField name="otherEmail" label="Other Email" />
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
              </ButtonToolbar>
            </Form>
            <div style={{ marginTop: "16px" }}></div>
            {formError && <Message type="error">{formError}</Message>}
          </Card>
        </div>
      </PageWrapper>
    </Wrapper>
  );
}
