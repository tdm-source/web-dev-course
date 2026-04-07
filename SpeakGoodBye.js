(function (window) {

  // STEP 7: объект
  var byeSpeaker = {};

  // НЕ трогаем
  var speakWord = "Goodbye";

  // STEP 8: метод
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: делаем глобальным
  window.byeSpeaker = byeSpeaker;

})(window);