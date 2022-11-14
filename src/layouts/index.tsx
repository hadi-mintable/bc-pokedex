import { Outlet } from "react-router-dom";
import { Container, Header, Main } from "./style";

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <h1>pokedex</h1>
        </Container>
      </Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};

export default Layout;
