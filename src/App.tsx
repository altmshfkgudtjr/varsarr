import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <div>
        <LogoLink href="https://vitejs.dev" target="_blank">
          <Logo src="/vite.svg" alt="Vite logo" />
        </LogoLink>
        <LogoLink href="https://reactjs.org" target="_blank">
          <ReactLogo src="/react.svg" alt="React logo" />
        </LogoLink>
      </div>
      <h1>Varsarr</h1>
      <div>
        <a href="https://vitejs.dev/" target="_blank">
          <p>Vite</p>
        </a>
        <a href="https://axios-http.com/" target="_blank">
          <p>Axios</p>
        </a>
        <a href="https://reactjs.org/" target="_blank">
          <p>React</p>
        </a>
        <a href="https://styled-components.com/" target="_blank">
          <p>Styled-Components</p>
        </a>
        <a href="https://github.com/aleclarson/vite-tsconfig-paths" target="_blank">
          <p>Absolute-Path</p>
        </a>
        <a href="https://recoiljs.org/" target="_blank">
          <p>Recoil</p>
        </a>
        <a
          href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
          target="_blank"
        >
          <p>React-Query</p>
        </a>
      </div>
      <Card>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </Wrapper>
  );
}

const logoSpinAnime = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const ReactLogo = styled(Logo)`
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

const LogoLink = styled.a`
  @media (prefers-reduced-motion: no-preference) {
    &:nth-of-type(2) ${Logo} {
      animation: ${logoSpinAnime} infinite 20s linear;
    }
  }
`;

const Card = styled.div`
  padding: 2em;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;

export default App;
