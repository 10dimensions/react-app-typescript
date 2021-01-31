import React from "react";

import { Page, Navbar, Link, NavLeft, NavRight } from "framework7-react";
import ContactForm from "./components/contactForm/ContactForm";

const Add = (props) => {
  const edit: boolean = props.edit;

  return (
    <Page>
      <ContactForm edit={edit} />
    </Page>
  );
};

export default Add;
