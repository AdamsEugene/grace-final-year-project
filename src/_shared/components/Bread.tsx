import { Breadcrumb, Stack } from "rsuite";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useTheme from "../hooks/useTheme";
import { DivCursor } from "./@styles";

interface Props {
  name?: string;
}

export default function Bread({ name }: Props) {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Stack justifyContent="space-between">
      <Stack.Item>
        <Breadcrumb separator={name ? <ArrowRightLineIcon /> : null}>
          <Breadcrumb.Item href="/#/">Home</Breadcrumb.Item>
          {name ? <Breadcrumb.Item active>{name}</Breadcrumb.Item> : null}
        </Breadcrumb>
      </Stack.Item>
      <Stack.Item>
        {isDark ? (
          <DivCursor>
            <BsFillSunFill
              fontSize="1.5em"
              onClick={() => toggleTheme("light")}
            />
          </DivCursor>
        ) : (
          <DivCursor>
            <BsFillMoonStarsFill
              fontSize="1.5em"
              onClick={() => toggleTheme("dark")}
            />
          </DivCursor>
        )}
      </Stack.Item>
    </Stack>
  );
}
