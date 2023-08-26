import { Avatar } from "rsuite";
import { BigImageWrapper, PageWrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";

export default function Image() {
  return (
    <PageWrapper>
      <Bread name="Image" />
      <Card
        title="Live Video Recording"
        children={
          <BigImageWrapper>
            <Avatar
              src="https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ce3cfef0e202437d9eed017f6c149913?v=854baeac"
              alt="@superman66"
              style={{ height: "730px", width: "100%" }}
            />
          </BigImageWrapper>
        }
        style={{ height: "85vh" }}
      />
    </PageWrapper>
  );
}
