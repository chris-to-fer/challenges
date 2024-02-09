import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lightsOn, allOn, allOff }) {
  console.log("onnow ", lightsOn);

  return (
    <StyledQuickActions>
      <Button
        disabled={lightsOn < 1 ? "true" : ""}
        type="button"
        onClick={() => {
          allOff();
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={lightsOn > 7 ? "true" : ""}
        type="button"
        onClick={() => {
          allOn();
          console.log("Turn all lights on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
