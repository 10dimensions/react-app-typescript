import React from "react";
import store from "./store/store.js";
import {
  Page,
  Navbar,
  NavLeft,
  Link,
  NavTitle,
  NavRight,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Popup,
  View
} from "framework7-react";

export default ({ f7router, f7route }) => {
  const users = store.getters.users;

  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link panelOpen="left">Quit</Link>
        </NavLeft>
        <NavTitle>Contacts</NavTitle>
        <NavRight>
          <Link panelOpen="right">+</Link>
        </NavRight>
      </Navbar>
      <Toolbar bottom>
        <Link>Favourites</Link>
        <Link>Recent</Link>
        <Link href="/item">Contacts</Link>
        <Link>Dial</Link>
      </Toolbar>

      <List>
        <ListItem link="/item/4/" title={users.value[0].name} />
      </List>

      {/* <List>
        <ListItem
          link="/load-something-that-doesnt-exist/"
          title="Default Route (404)"
        />
      </List> */}
    </Page>
  );
};
