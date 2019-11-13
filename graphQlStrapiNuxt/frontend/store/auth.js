import Cookies from "js-cookie";

// Defining an empty state
export const state = () => {};

// Create a mutation that set a user to your state and in a 'user' cookie
export const mutations = {
  setUser(state, user) {
    state.user = user;
    Cookies.set("user", user);
  },
  // Mutation that you need to add
  logout(state) {
    state.user = null;
    Cookies.set("user", null);
  }
};

// Define a getter in order to get your current username from your state
export const getters = {
  username: state => {
    return state.user && state.user.username;
  }
};
