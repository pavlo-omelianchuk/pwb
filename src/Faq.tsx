import { useState } from 'react';
import styled from 'styled-components';

export const FaqComponent = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(prev => !prev);
  };
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <>
      <button onClick={handleToggle}>{!toggle ? 'Not Toggled' : 'Toggled'}</button>
      <Wrapper>
        <Title>Hello World!</Title>
        <Title>Hello World!</Title>
      </Wrapper>
    </>
  );
};
