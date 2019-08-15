<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-light header__nav">
        <router-link class="header__logo" to="/">Авито</router-link>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link exact active-class="active" class="nav-link" to="/">
              <div class="header__link">
                <img class="mr-2 header__icon" src="../assets/img/home.svg" alt />
                Главная
              </div>
            </router-link>
          </li>
          <li class="nav-item =">
            <router-link exact active-class="active" class="nav-link" to="/admin">
              <div class="header__link">
                <img class="mr-2 header__icon" src="../assets/img/man-user.svg" alt />
                Админка
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link exact active-class="active" class="nav-link" to="/cart">
              <div class="header__link">
                <img class="mr-2 header__icon" src="../assets/img/shopping-cart.svg" alt />
                Корзина({{$store.state.cartItems.length}})
              </div>
            </router-link>
          </li>
        </ul>
      </nav>

      <h1 class="header__logo"></h1>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background: rgb(228, 228, 228);
  &__logo {
    font-weight: 700;
    font-size: 40px;
    color: #000000;
    &:hover {
      text-decoration: none;
      color: lighten(#000000, 40);
    }
  }
  &__link {
    display: flex;
  }
  &__icon {
    width: 20px;
  }
  &__nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .navbar-nav {
    flex-direction: row;
  }
  .navbar-nav li {
    margin-right: 10px;
  }
}
</style>
