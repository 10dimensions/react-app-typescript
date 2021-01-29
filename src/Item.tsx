import React from "react";
import store from "./store/store";
import { Page, Navbar, BlockTitle, Block, Link } from "framework7-react";

interface ID {
  id: string;
}

interface Num {
  num: number;
}

const ContactItem = (props) => {
  const id: ID = props.id;
  const num: Num = props.num;

  store.dispatch("setCurrent", { obj: { id: id, num: num } });
  const user = store.getters.user;
  const { name, number, email, fav } = user.value;

  return (
    <Page>
      <Navbar title="" backLink="Back" />
      <BlockTitle>{name}</BlockTitle>
      <Block strong>
        <p>Here is About page!</p>
        <p>
          You can go <Link back>back</Link>.
        </p>
      </Block>
    </Page>
  );
};

export default ContactItem;
