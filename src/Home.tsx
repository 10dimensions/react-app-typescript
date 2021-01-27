import React from "react";
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
        <ListItem
          link="/item/4/"
          title="Item"
          // onClick={() => {
          //   f7router.navigate("/item/4");
          // }}
        />
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
