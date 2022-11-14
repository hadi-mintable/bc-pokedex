import { Outlet } from "react-router-dom";
import { Container, Header, Main, HeaderLink, Clone } from "./style";

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderLink to="/">
            <h1>
              pokedex<Clone>.clone</Clone>
            </h1>
          </HeaderLink>
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
