import styled from "styled-components";
import Routes from "./routes";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(237,240,245);
`;

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
