export default async function({ store, redirect }) {
  if (!store.getters["user/user"]) {
    redirect("/login");
  }
  // if (!store.getters["user/user"]) {
  //   console.log("До запроса");

  //   await store.dispatch("user/loadUser");
  //   console.log("после запроса");
  //   if (!store.getters["user/user"]) {
  //     redirect("/login");
  //   }
  // }
}
