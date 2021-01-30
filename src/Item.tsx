import React from "react";
import store from "./store/store";
import {
  Page,
  Navbar,
  NavRight,
  BlockTitle,
  Block,
  Link
} from "framework7-react";
import Profile from "./components/profile/Profile";

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

  return (
    <Page>
      <Navbar title="" backLink="Back">
        <NavRight>
          <Link href="/add/true">Edit</Link>
        </NavRight>
      </Navbar>

      <Profile details={user.value} id={id} num={num} />
    </Page>
  );
};

export default ContactItem;
