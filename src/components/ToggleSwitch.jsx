import { useState } from "react";
import styled from "styled-components";

const Switch = () => {
  const [isLightMode, setIsLightMode] = useState(false); // Track theme state

  const toggleTheme = () => {
    setIsLightMode(!isLightMode); // Toggle the state
    document.body.style.backgroundColor = isLightMode ? "#1f1f1f" : "#f3f4f6"; // Change background color
    document.body.style.color = isLightMode ? "#1f1f1f" : "#010103"; // Change text color
    document.body.style.transition =
      "background-color 0.5s ease, color 0.5s ease"; // Add transition
  };

  return (
    <StyledWrapper>
      <input
        type="checkbox"
        className="theme-checkbox"
        onChange={toggleTheme} // Add toggle functionality
        checked={isLightMode} // Sync state with checkbox
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .theme-checkbox {
    --toggle-size: 8px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 6.25em;
    height: 3.125em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
  }

  .theme-checkbox::before {
    content: "";
    width: 2.25em;
    height: 2.25em;
    position: absolute;
    top: 0.438em;
    left: 0.438em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - 2.25em - 0.438em);
    background-position: 0;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default Switch;
