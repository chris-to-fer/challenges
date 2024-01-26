import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { StyledBox } from "@/components/BoxWithStyledComponents.js";
import { StyledContainer } from "@/components/BoxWithStyledComponents.js";
export default function HomePage() {
  return (
    <StyledContainer $row>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox $row />
      <StyledBox $isBlack />
    </StyledContainer>
  );
}
