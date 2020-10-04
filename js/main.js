$(document).ready(function () {
  var hotelslider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "coverflow",
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("клик по кнопке");
    document
      .querySelector(".navbar-buttom")
      .classList.toggle("navbar-buttom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  var modalOverley = $(".modal__overley");
  var modalDialog = $(".modal__dialog");

  function openModal() {
    modalOverley.addClass("modal__overley--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    console.log(event.target);
    event.preventDefault();

    modalOverley.removeClass("modal__overley--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).on("keydown", function (event) {
    if (event.keyCode == 27) {
      closeModal(event);
    }
  });
});
