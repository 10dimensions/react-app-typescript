import React from "react";
import { Page, Navbar, BlockTitle, Block, Link } from "framework7-react";

interface Details {
  name: string;
  phone: number;
  email: string;
  pic: string;
}

const ContactItem = (props) => {
  console.log(props);
  return (
    <Page>
      <Navbar title="" backLink="Back" />
      <BlockTitle>{props.id}</BlockTitle>
      <Block strong>
        <p>Here is About page!</p>
        <p>
          You can go <Link back>back</Link>.
        </p>
        <p>Mauris</p>
        <p>Fusce</p>
      </Block>
    </Page>
  );
};

export default ContactItem;
