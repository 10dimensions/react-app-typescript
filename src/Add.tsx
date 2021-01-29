import React from "react";
import store from "./store/store";
import {
  List,
  ListInput,
  Icon,
  Page,
  Navbar,
  BlockTitle,
  Block,
  Link,
  NavLeft,
  NavRight
} from "framework7-react";

const Add = (props) => {
  return (
    <Page>
      <Navbar>
        <NavLeft backLink="Back" />
        <NavRight>
          <Link href="/">✓</Link>
        </NavRight>
      </Navbar>

      <List inlineLabels noHairlinesMd>
        <ListInput type="text" placeholder="Your name" clearButton />
        <ListInput type="text" placeholder="Your Ph Number" clearButton />
        <ListInput type="text" placeholder="Your Email" clearButton />
      </List>
    </Page>
  );
};

export default Add;
