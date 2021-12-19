import styled from "styled-components";

export const Number = styled.div`
  ${(props) => {console.log('props', props)}}
  background-color: ${({css: {color}}) => color };

  border: solid 1px ${({css: {border}}) => border};
  border-radius: 100%;

  padding: ${({legend}) => legend ? `11px 11px;` : `6px 5px;`}
  margin: 5px;

  font-size: 11px;

  cursor: pointer;
`;
