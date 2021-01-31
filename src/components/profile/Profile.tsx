import React from "react";
import "./styles.scss";
import store from "../../store/store";
import { BlockTitle, Block, Icon, Button } from "framework7-react";

const setFavourite = (id, num, fav) => {
  store.dispatch("setFavourite", { obj: { id: id, num: num, fav: fav } });
};

const deleteUser = (id, num) => {
  store.dispatch("deleteUser", { obj: { id: id, num: num } });
};

const Profile = (props) => {
  const { name, number, email, fav } = props.details;
  const { id, num } = props;

  return (
    <div>
      <div>
        <img src="./assets/cover.png" alt="Avatar" className="cover" />
        <img src="./assets/avatar.png" alt="Avatar" className="avatar" />
      </div>

      <p className="row btngroup">
        <button className="col button button-raised btn">
          <i className="material-icons">chat_bubble</i>
        </button>
        <button className="col button button-raised btn">
          <i className="material-icons">phone</i>
        </button>
        <button
          className="col button button-raised btnselect"
          onClick={() => setFavourite(id, num, !fav)}
        >
          <i className="material-icons iconselect">star</i>
        </button>
      </p>

      {/* <BlockTitle>Details</BlockTitle> */}
      <Block strong>
        <div className="details">
          <i className="material-icons icon">notes</i>
          <p>{name}</p>
          <i className="material-icons icon">phone</i>
          <p>{number}</p>
          <i className="material-icons icon">alternate_email</i>
          <p>{email}</p>
        </div>
      </Block>

      <button
        className="button button-raised btndelete"
        onClick={() => deleteUser(id, num)}
      >
        Delete Contact
      </button>
    </div>
  );
};

export default Profile;
