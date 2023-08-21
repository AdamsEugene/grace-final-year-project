/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Button, ButtonToolbar, Schema, Panel } from "rsuite";
import { CenterPage } from "../_shared/components/@styles";
import Card from "../_shared/components/Card";

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
});

function TextField(props: any) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}
export default function Login() {
  return (
    <CenterPage>
      <Card
        title={"Login"}
        children={
          <Form model={model}>
            <TextField name="name" label="Username" />
            <TextField name="email" label="Email" />
            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                Submit
              </Button>
            </ButtonToolbar>
          </Form>
        }
        style={{ width: "500px", height: "500px" }}
      />
    </CenterPage>
  );
}
