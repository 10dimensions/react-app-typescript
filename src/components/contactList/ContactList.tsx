import React from "react";
import { List, ListItem, ListGroup } from "framework7-react";

const ContactList = (props) => {
  const { data, fav } = props;
  const dataOrder = Object.keys(data);

  return (
    <List contactsList>
      {dataOrder.map((element, index) => {
        if (data[dataOrder[index]].length > 0) {
          return (
            <ListGroup key={"group" + index}>
              <ListItem title={dataOrder[index]} groupTitle />
              {data[dataOrder[index]].map((element, index) => {
                if (element.fav === fav) {
                  return (
                    <ListItem
                      title={element.name}
                      key={element.name + index}
                      link={
                        "/item/" + element.name.charAt(0) + "/" + index + "/"
                      }
                    />
                  );
                }
              })}
            </ListGroup>
          );
        }
      })}
    </List>
  );
};

export default ContactList;
