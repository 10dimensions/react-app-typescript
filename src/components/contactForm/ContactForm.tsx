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

function binarySearch(ar, el, compare_fn) {
  if (el.price < ar[0].price) return 0;
  if (el.price > ar[ar.length - 1].price) return ar.length;
  var m = 0;
  var n = ar.length - 1;
  while (m <= n) {
    var k = (n + m) >> 1;
    var cmp = compare_fn(el, ar[k]);
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return k;
    }
  }
  return -m - 1;
}

function comp(a, b) {
  return a["name"].localeCompare(b["name"]);
}

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
