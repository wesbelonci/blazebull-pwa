const suportedLanguages = ["en", "pt", "es"];

function getLocale() {
  const url = window.location.href;

  const locale = url.split("/")[3] ? url.split("/")[3] : navigator.language;

  const checkSuportedLanguage = suportedLanguages.find(
    (language) => language === locale
  );

  let language = "en";

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

    console.log(language);

    // localStorage.setItem("@blazebull:locale", language);

    return language;
  } else {
    return checkSuportedLanguage;
  }
}

export { getLocale, suportedLanguages };
