import { createStore } from "framework7";

// create store
const store = createStore({
  // start with the state (store data)
  state: {
    users: [
      { name: "alpine", number: "954", email: "alpine@aol.com" },
      { name: "cython", number: "777", email: "cythe@outlook.com" }
    ]
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
    }
    // ...
  },

  // getters to retrieve the state
  getters: {
    // context object containing store state will be passed as an argument
    users({ state }) {
      return state.users;
    }
  }
});

// export store
export default store;
