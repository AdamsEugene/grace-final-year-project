/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Form, ButtonToolbar, Button, Stack } from "rsuite";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../_shared/services/fireBase";
import Card from "../_shared/components/Card";
import StyledUploader from "../_shared/components/StyledUploader";
// import bg from "../assets/s_l_bg.png";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    if (auth.currentUser) {
      if (
        auth.currentUser.email === email &&
        (auth.currentUser as any)?.password === password
      )
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log(error);
          });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;

          console.log(user);
          auth.currentUser &&
            updateProfile(auth.currentUser, {
              displayName: userName,
            })
              .then(() => {
                navigate("/");
              })
              .catch((error) => console.log(error));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errorCode, errorMessage });
        });
    }
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
          <Form fluid>
            <Form.Group>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledUploader />
              </div>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control
                name="name"
                type="text"
                onChange={(value) => setUserName(value)}
              />
              <Form.HelpText tooltip>Name is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                name="email"
                type="email"
                onChange={(value) => setEmail(value)}
              />
              <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                onChange={(value) => setPassword(value)}
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary" onClick={signup}>
                  Submit
                </Button>
                <Button appearance="default" onClick={() => navigate("/login")}>
                  Login Instead
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Card>
      </Stack>
    </div>
  );
}
