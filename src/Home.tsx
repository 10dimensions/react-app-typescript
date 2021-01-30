import React, { useState, useEffect } from "react";
import store from "./store/store";
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
  ListGroup,
  Row,
  Col,
  Button,
  Popup,
  View
} from "framework7-react";

import ContactList from "./components/contactList/ContactList";

export default ({ f7router, f7route }) => {
  const users = store.getters.users;
  const usersList = users.value;
  const userOrder = Object.keys(usersList);

  const [fav, setFav] = useState<boolean>(false);

  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link>Quit</Link>
        </NavLeft>
        <NavTitle>{fav ? "Favourites" : "Contacts"}</NavTitle>

        <NavRight>
          <Link href="/add/false">+</Link>
        </NavRight>
      </Navbar>

      <Toolbar bottom>
        <Link onClick={() => setFav(true)}>Favourites</Link>
        <Link>Recent</Link>
        <Link onClick={() => setFav(false)}>Contacts</Link>
        <Link>Dial</Link>
      </Toolbar>

      <ContactList data={usersList} fav={fav} />

      {/*
      <List>
        <ListItem
          link="/load-something-that-doesnt-exist/"
          title="Default Route (404)"
        />
      </List> */}
    </Page>
  );
};
