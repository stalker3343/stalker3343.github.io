  
  <template>
  <header class="header">
    <div class="container header__conatiner">
      <div class="header__logo logo">
        <div class="logo__img">
          <img src="/Palm_color.svg" alt />
        </div>
        <div class="header__title">{{title}}</div>
      </div>

      <div class="header__menu">
        <div class="header__last-save">Последнее сохранение 3 часа назад</div>
        <a href="#" class="header__exit">Сохранить и выйти</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["title"]
};
</script>
 
<style>
.header__conatiner {
  display: flex;
  justify-content: space-between;
}
.header {
  padding: 30px 0px;
  background: #f9f9f9;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__title {
  font-size: 20px;
  font-weight: 700;
}
.logo__img {
  width: 54px;
  margin-right: 20px;
}
.header__menu {
  display: flex;
  align-items: center;
}
.header__last-save {
  font-weight: 300;
  font-size: 14px;
  color: #678598;
  margin-right: 30px;
}
.header__exit {
  color: #4592ff;
  text-decoration: none;
  font-size: 18px;
}
.header__exit:hover {
  text-decoration: underline;
}
</style>
