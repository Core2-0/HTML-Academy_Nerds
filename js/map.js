ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.968646, 30.312535],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([59.968534, 30.317887], {
          hintContent: 'Адрес офиса: наб. Реки Карповки, 5 лит П, Санкт-Петербург',
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/map_pin.png',
          iconImageSize: [231, 190],
          iconImageOffset: [-80, -160],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});
