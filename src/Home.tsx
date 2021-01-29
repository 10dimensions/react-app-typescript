import React from "react";
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

const ContactList = (props) => {
  const data = props.data;
  const dataOrder = Object.keys(data);

  return (
    <List contactsList>
      {dataOrder.map((element, index) => {
        if (data[dataOrder[index]].length > 0) {
          return (
            <ListGroup key={"group" + index}>
              <ListItem title={dataOrder[index]} groupTitle />
              {data[dataOrder[index]].map((element, index) => {
                return (
                  <ListItem
                    title={element.name}
                    key={element.name + index}
                    link={"/item/" + element.name.charAt(0) + "/" + index + "/"}
                  />
                );
              })}
            </ListGroup>
          );
        }
      })}
      )
    </List>
  );
};

export default ({ f7router, f7route }) => {
  const users = store.getters.users;
  const usersList = users.value;
  const userOrder = Object.keys(usersList);

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

      <ContactList data={usersList} />

      {/*
      <List>
        <ListItem link="/item/4/" title={"users.value[0].name"} />
      </List>
      
      <List>
        <ListItem
          link="/load-something-that-doesnt-exist/"
          title="Default Route (404)"
        />
      </List> */}
    </Page>
  );
};
