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

ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  (myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [7.838192101316872, 98.2988076841056],
      zoom: 18,
    },
    {
      searchControlProvider: "yandex#search",
    }
  )),
    (myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [7.838192101316872, 98.2988076841056],
        },
        // Свойства.
        properties: {
          // Контент метки.
          iconContent: "Я тащусь",
          hintContent: "Ну давай уже тащи",
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: "islands#blackStretchyIcon",
        // Метку можно перемещать.
        draggable: true,
      }
    )),
    (myPieChart = new ymaps.Placemark(
      [55.847, 37.6],
      {
        // Данные для построения диаграммы.
        data: [
          { weight: 8, color: "#0E4779" },
          { weight: 6, color: "#1E98FF" },
          { weight: 4, color: "#82CDFF" },
        ],
        iconCaption: "Диаграмма",
      },
      {
        // Зададим произвольный макет метки.
        iconLayout: "default#pieChart",
        // Радиус диаграммы в пикселях.
        iconPieChartRadius: 30,
        // Радиус центральной части макета.
        iconPieChartCoreRadius: 10,
        // Стиль заливки центральной части.
        iconPieChartCoreFillStyle: "#ffffff",
        // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeStyle: "#ffffff",
        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeWidth: 3,
        // Максимальная ширина подписи метки.
        iconPieChartCaptionMaxWidth: 200,
      }
    ));

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [7.838192101316872, 98.2988076841056],
      {
        balloonContent: "цвет ",
        iconCaption: "Hilton Phuket Arcadia Resort & SPA",
      },
      {
        preset: "islands#greenDotIconWithCaption",
      }
    )
  );
}
