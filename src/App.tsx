import React from "react";
import { App, Panel, View, Page, Block } from "framework7-react";
import PageHome from "./Home";
import ContactItem from "./Item";
import Add from "./Add";
import PageNotFound from "./404";

const f7params = {
  id: "com.app2020.contactlist", // App bundle ID
  name: "Contacts 2020", // App name
  theme: "auto", // Automatic theme detection
  // App routes
  routes: [
    {
      path: "/",
      component: PageHome
    },
    {
      path: "/contacts/:fav",
      component: PageHome
    },
    {
      path: "/item/:id/:num/",
      component: ContactItem
    },
    {
      path: "/add/:edit",
      component: Add
    },
    {
      path: "(.*)",
      component: PageNotFound
    }
  ]
};

export default () => {
  return (
    <App {...f7params}>
      <View main url="/" />
    </App>
  );
};
