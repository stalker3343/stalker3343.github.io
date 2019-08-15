<template>
  <div class="container admin-page">
    <div class="row">
      <div class="col-md-4">
        <ul class="admin-page__menu">
          <li class="admin-page__menu-item">
            <router-link
              exact
              active-class="admin-page__menu-link--active"
              to="/admin"
              class="admin-page__menu-link"
            >Все товары</router-link>
          </li>
          <li class="admin-page__menu-item">
            <router-link
              exact
              active-class="admin-page__menu-link--active"
              to="/admin/new"
              class="admin-page__menu-link"
            >Новый товар</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.admin-page {
  margin: 40px auto;
  &__menu {
    padding-left: 0px;
    display: flex;
    flex-direction: column;
  }
  &__menu-item {
    list-style-type: none;
  }
  &__menu-link {
    display: block;
    padding: 10px 10px;

    background: yellow;
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: black;
      background: lighten(yellow, 20);
    }
    &--active {
      text-decoration: underline;
    }
  }
}
</style>