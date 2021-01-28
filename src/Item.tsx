import React from "react";
import { Page, Navbar, BlockTitle, Block, Link } from "framework7-react";

interface ID {
  id: number;
}

const ContactItem = (props) => {
  const id: ID = props.id;

  return (
    <Page>
      <Navbar title="" backLink="Back" />
      <BlockTitle>{id}</BlockTitle>
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
