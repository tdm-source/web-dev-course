(function (window) {

  // STEP 3: объект
  var helloSpeaker = {};

  // НЕ трогаем
  var speakWord = "Hello";

  // STEP 4: метод внутри объекта
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: делаем глобальным
  window.helloSpeaker = helloSpeaker;

})(window);