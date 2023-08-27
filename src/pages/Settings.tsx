import { Button, ButtonToolbar, Form } from "rsuite";
import { PageWrapper, Wrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import Sidebar from "../_shared/components/Sidebar";
import StyledUploader from "../_shared/components/StyledUploader";
import { useState } from "react";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const update = () => {
    console.log({ email, password, userName });
  };
  return (
    <Wrapper>
      <Sidebar />
      <PageWrapper>
        <Bread name="User" />
        <Card title={"Update Info"} style={{ width: "100%" }}>
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
                <Button appearance="primary" onClick={update}>
                  Submit
                </Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Card>
      </PageWrapper>
    </Wrapper>
  );
}
