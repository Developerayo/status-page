import React from 'react';
import { useDowntime } from './hooks/useDowntime';
import MainStatus from './components/MainStatus';

import Header from './components/Header';
import Downtimes from './components/Downtimes';
import styled from 'styled-components';

const Main = styled.main`
  background: #1d2022;
  box-shadow: 0px 2px 0.25rem rgba(0, 0, 0, 0.25),
    0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  width: 890px;
  max-width: 100%;
  min-height: 660px;
  padding: 2.5rem;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Footer = styled.span`
  margin: 1.5rem 0;
  text-align: center;
  font-size: 1rem;

  color: rgba(255, 255, 255, 0.6);
`;

const App = () => {
  const [downtimes, up, loading] = useDowntime();

  return (
    <Wrapper>
      <Header />
      <Main>
        <MainStatus up={up} loading={loading} />
        <Downtimes downtimes={downtimes} />
      </Main>
      <Footer>
        Updates will be provided via the{' '}
        <a href="https://twitter.com/csbstatus" target="_blank">
          @csbstatus
        </a>{' '}
        twitter feed—follow us there!
      </Footer>
    </Wrapper>
  );
};

export default App;
