import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ light, handleToggle }) {
  return (
    <StyledLights>
      {light.map((e) => (
        <li key={e.id}>
          <Light
            onToggle={handleToggle}
            name={e.name}
            id={e.id}
            isOn={e.isOn}
          />
        </li>
      ))}
    </StyledLights>
  );
}
