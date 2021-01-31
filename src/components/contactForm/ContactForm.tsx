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

//myArray.splice(binarySearch(myArray, element, comp), 0, element)

const CreateUser = (id, num, edit, name, number, email, fav) => {
  if (edit === "false") {
    store.dispatch("addUser", {
      obj: {
        id: name.charAt(0),
        name: name,
        number: number,
        email: email,
        fav: false
      }
    });
  } else {
    store.dispatch("modifyUser", {
      obj: {
        id: id,
        num: num,
        name: name,
        number: number,
        email: email,
        fav: fav
      }
    });
  }
};

const ContactForm = (props) => {
  const edit: string = props.edit;
  const user = store.getters.user;
  const current = store.getters.current;

  const { name, number, email, fav } = user.value;
  const { id, num } = current.value;

  const [iname, setIname] = useState<string>(edit === "true" ? name : "");
  const [inumber, setInumber] = useState<string>(edit === "true" ? number : "");
  const [iemail, setIemail] = useState<string>(edit === "true" ? email : "");

  console.log(edit, name, iname);

  return (
    <div>
      <Navbar>
        <NavLeft backLink="Back" />
        <NavRight>
          <Link
            onClick={() =>
              CreateUser(id, num, edit, iname, inumber, iemail, fav)
            }
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
