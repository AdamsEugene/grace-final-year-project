import { useState } from "react";
import { Form, ButtonToolbar, Button, Stack } from "rsuite";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../_shared/services/fireBase";
import Card from "../_shared/components/Card";
// import bg from "../assets/s_l_bg.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        navigate("/");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
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
          <Form fluid>
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
                <Button appearance="primary" onClick={login}>
                  Submit
                </Button>
                <Button
                  appearance="default"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Card>
      </Stack>
    </div>
  );
}
