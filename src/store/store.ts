import { createStore } from "framework7";
var localStorage = require("localStorage");

// create store
const store = createStore({
  // start with the state (store data)
  state: {
    current: { id: "A", num: 0 },
    users: {
      A: [
        { name: "alpine", number: "954", email: "alpine@aol.com", fav: false },
        { name: "apple", number: "111", email: "oinf@app.com", fav: true }
      ],
      B: [],
      C: [
        { name: "ceddar", number: "777", email: "cythe@aol.com", fav: false },
        { name: "cherry", number: "525", email: "cherry@gmail.com", fav: true }
      ],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      I: [],
      J: [],
      K: [],
      L: [],
      M: [],
      N: [],
      O: [],
      P: [],
      Q: [],
      R: [],
      S: [],
      T: [],
      U: [],
      V: [],
      W: [],
      X: [],
      Y: [],
      Z: []
    }
    // ...
  },

  // actions to operate with state and for async manipulations
  actions: {
    // context object containing store state will be passed as an argument
    getUser({ state }) {
      // fetch users from API
      fetch("some-url")
        .then((res) => res.json())
        .then((users) => {
          // assign new users to store state.users
          state.users = users;
        });
    },
    loadUsers({ state }, { users }) {
      state.users = JSON.parse(users);
    },

    addUser({ state }, { obj }) {
      const { id, name, number, email, fav } = obj;

      const _id: string = id.toUpperCase();

      state.users[_id].push({
        name: name,
        number: number,
        email: email,
        fav: fav
      });

      localStorage.setItem("contacts", JSON.stringify(state.users));
      console.log(localStorage.getItem("contacts"));
    },

    modifyUser({ state }, { obj }) {
      const { id, num, name, number, email, fav } = obj;

      const _id: string = id.toUpperCase();
      const _num: number = parseInt(num);

      state.users[_id][_num] = {
        name: name,
        number: number,
        email: email,
        fav: fav
      };
      localStorage.setItem("contacts", JSON.stringify(state.users));
    },

    deleteUser({ state }, { obj }) {
      const { id, num } = obj;

      const _id: string = id.toUpperCase();
      const _num: number = parseInt(num);

      state.users[_id].splice(_num, 1);
      localStorage.setItem("contacts", JSON.stringify(state.users));
    },

    setCurrent({ state }, { obj }) {
      const { id, num } = obj;

      const _id: string = id.toUpperCase();
      const _num: number = parseInt(num);

      state.current = { id: _id, num: _num };
    },

    setFavourite({ state }, { obj }) {
      const { id, num, fav } = obj;

      const _id: string = id.toUpperCase();
      const _num: number = parseInt(num);

      state.users[_id][_num]["fav"] = fav;
      localStorage.setItem("contacts", JSON.stringify(state.users));
    }
  },

  // getters to retrieve the state
  getters: {
    // context object containing store state will be passed as an argument
    users({ state }) {
      return state.users;
    },
    favusers({ state }) {
      return;
    },
    user({ state }) {
      const id: string = state.current.id;
      const num: number = state.current.num;
      return state.users[id][num];
    },
    current({ state }) {
      return state.current;
    }
  }
});

// export store
export default store;
