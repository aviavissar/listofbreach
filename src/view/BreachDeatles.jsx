import React from "react";
import styled from "styled-components/macro";
import media from "styled-media-query";

const BreachDeatles = ({ breach }) => {
  let breachKeys = Object.keys(breach);
  let breachValues = Object.values(breach);

  return (
    <StepContainer>
      { breachKeys.map((key, indx) => {
        return <StepDiv key={`${indx}-${breachValues[5]}`}><span> {`${key} : ${breachValues[indx]}`}</span> </StepDiv>;
      })}
    </StepContainer>
  );
};

export default BreachDeatles;

const StepDiv = styled.div`
  line-height: 1.5;
  margin: 2px;
  text-align: left;
  font-size: 13px;
  ${media.lessThan("small")`
    padding: 5px;
   `}
  span {
    width: 100%;
    word-break: break-word;
  }
`;

const StepContainer = styled.div`
  display: flex;
 flex-direction:column;
`;
