var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: (7.838184812206101, 98.29880496908747),
      zoom: 10,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
}
