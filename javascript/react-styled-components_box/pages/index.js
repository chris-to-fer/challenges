import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

import { StyledContainer } from "@/components/BoxWithStyledComponents.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
export default function HomePage() {
  return (
    <StyledContainer $row>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $row />
      <BoxWithStyledComponents $isBlack />
    </StyledContainer>
  );
}
