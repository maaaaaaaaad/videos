import React from "react";
import styled from "styled-components";

const Items = () => {
  return (
    <ItemsSection>
      <EachSection>Videos</EachSection>
      <EachSection>Books</EachSection>
      <EachSection>Notes</EachSection>
    </ItemsSection>
  );
};

const ItemsSection = styled.section`
  width: 100%;
  display: flex;
`;

const EachSection = styled.section`
  flex-basis: 33.3%;
  text-align: center;
  cursor: pointer;
`;

export default Items;
