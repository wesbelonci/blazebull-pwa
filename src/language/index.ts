const suportedLanguages = ["en", "pt", "es"];

function getLocale() {
  const locale = window.location.href.split("/")[3];

  const checkSuportedLanguage = suportedLanguages.find(
    (language) => language === locale
  );

  let language = "es";

  if (!checkSuportedLanguage) {
    switch (locale) {
      case "en-US":
        language = "en";
        break;
      case "en":
        language = "en";
        break;
      //
      case "pt-BR":
        language = "pt";
        break;
      case "pt":
        language = "pt";
        break;
      //
      case "es-ES":
        language = "es";
        break;
      case "es":
        language = "es";
        break;
      default:
        language = "en";
    }

    return language;
  } else {
    return checkSuportedLanguage;
  }
}

export { getLocale, suportedLanguages };
