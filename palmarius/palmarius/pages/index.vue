<template>
  <div>
    <Header title="Создание тура"></Header>
    <section class="new-tour">
      <div class="container new-tour__conatiner">
        <div class="new-tour__col">
          <h1 class="new-tour__title">Добро пожаловать, Екатерина!</h1>
          <div
            class="new-tour__inform"
          >Мы разделили процесс создания тура на 4 ключнвые шага для вашего удобства. Прогресс заполнения сохраняется</div>

          <div class="new-tour__cards">
            <nuxt-link to="step1" class="card">
              <div class="card__step">Шаг 1</div>
              <div class="card__title">Информация о туре</div>
              <div class="card__info">Локация, описание, приимущества, фотогалерея</div>
              <div class="card__triangle"></div>
              <div class="card__progress"></div>
            </nuxt-link>

            <nuxt-link to="step2" class="card">
              <div class="card__step">Шаг 2</div>
              <div class="card__title">Программа тура</div>
              <div class="card__info">Локация, описание, приимущества, фотогалерея</div>
              <div class="card__triangle"></div>
              <div class="card__progress"></div>
            </nuxt-link>

            <nuxt-link to="step3" class="card">
              <div class="card__step">Шаг 3</div>
              <div class="card__title">Дата, стоимость и скидки</div>
              <div class="card__info">Локация, описание, приимущества, фотогалерея</div>
              <div class="card__triangle"></div>
              <div class="card__progress"></div>
            </nuxt-link>

            <nuxt-link to="step4" class="card">
              <div class="card__step">Шаг 4</div>
              <div class="card__title">Способы оплаты</div>
              <div class="card__info">Локация, описание, приимущества, фотогалерея</div>
              <div class="card__triangle"></div>
              <div class="card__progress"></div>
            </nuxt-link>
          </div>
        </div>
        <div class="new-tour__col">
          <h1 class="new-tour__title">Добро пожаловать, Екатерина!</h1>
          <div
            class="new-tour__inform"
          >Мы разделили процесс создания тура на 4 ключнвые шага для вашего удобства. Прогресс заполнения сохраняется</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
.card__step {
  font-weight: 600;
  font-size: 18px;
  color: #424351;
}
.card__title {
  color: #424351;
  font-weight: 700;
  font-size: 28px;
}
.card__info {
  color: #678598;
  font-size: 16px;
}
.card__progress {
  margin-top: 5px;
  height: 5px;
  background: #f5f8fa;
  position: relative;
  border-radius: 10px;

  width: 80%;
}
.card__progress::after {
  content: "";
  position: absolute;

  background: #33c66e;
  top: 0px;
  left: 0px;
  width: 80%;
  height: 100%;
}
.new-tour__cards {
  margin-top: 35px;
}
.card {
  margin-bottom: 20px;
  position: relative;
  color: none;
  text-decoration: none;

  padding: 20px;
  border: 1px solid #ebebec;
  display: flex;
  flex-direction: column;
}
.card:hover {
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1);
}
.card__triangle {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateX(-50%);
}
.card__triangle:after {
  transform: translateY(-5px) rotate(45deg);
  content: "";
  position: absolute;
  width: 20px;
  background: #678598;
  height: 5px;
  border-radius: 5px;
}
.card__triangle:before {
  border-radius: 5px;
  transform: translateY(5px) rotate(-45deg);
  content: "";
  position: absolute;
  width: 20px;
  background: #678598;
  height: 5px;
}
.new-tour {
  padding: 60px 0px;
}
.new-tour__conatiner {
  display: flex;
  justify-content: space-between;
}
.new-tour__col {
  flex: 0 1 46%;
}
.new-tour__title {
  font-size: 28px;
  color: #424351;
  font-weight: 700;
}
.new-tour__inform {
  margin-top: 5px;
  color: #5b5c68;
  font-weight: 400;
  font-size: 16px;
}
</style>

