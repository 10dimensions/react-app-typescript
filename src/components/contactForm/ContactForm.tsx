import React, { useState, useEffect } from "react";
import store from "../../store/store";
import {
  List,
  ListInput,
  Navbar,
  NavLeft,
  NavRight,
  Link
} from "framework7-react";

const CreateUser = (edit, name, num, email) => {
  if (edit === "false") {
    store.dispatch("addUser", {
      obj: { id: name.charAt(0), name: name, num: num, email: email }
    });
  }
};

const ContactForm = (props) => {
  const edit: string = props.edit;
  const user = store.getters.user;

  const { name, number, email } = user.value;

  const [iname, setIname] = useState<string>(edit === "true" ? name : "");
  const [inumber, setInumber] = useState<string>(edit === "true" ? number : "");
  const [iemail, setIemail] = useState<string>(edit === "true" ? email : "");

  return (
    <div>
      <Navbar>
        <NavLeft backLink="Back" />
        <NavRight>
          <Link
            onClick={() => CreateUser(edit, iname, inumber, iemail)}
            href="/"
          >
            ✓
          </Link>
        </NavRight>
      </Navbar>
      <List inlineLabels noHairlinesMd>
        <ListInput
          type="text"
          placeholder="Your name"
          defaultValue={iname}
          clearButton
          onInput={(e) => {
            setIname(e.target.value);
          }}
        />
        <ListInput
          type="text"
          placeholder="Your Ph Number"
          defaultValue={inumber}
          clearButton
          onInput={(e) => {
            setInumber(e.target.value);
          }}
        />
        <ListInput
          type="text"
          placeholder="Your Email"
          defaultValue={iemail}
          clearButton
          onInput={(e) => {
            setIemail(e.target.value);
          }}
        />
      </List>
    </div>
  );
};

export default ContactForm;
