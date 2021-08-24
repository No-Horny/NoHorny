interface IUserPreferences {
  theme: "dark" | "light";
  lang: "en" | "pt";
}

// Detect the user theme preference and apply to app default theme
let userThemePreference = "";
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  userThemePreference = "dark";
} else {
  userThemePreference = "light";
}

let userLangPreferences = "";
if (
  Array.from(window.navigator.language)
    .splice(0, 2)
    .toString()
    .replace(/,/g, "") === "pt"
) {
  userLangPreferences = "pt";
} else {
  userLangPreferences = "en";
}

if (!localStorage.getItem("user-preferences")) {
  localStorage.setItem(
    "user-preferences",
    JSON.stringify({
      theme: userThemePreference || "light",
      lang: userLangPreferences || "en",
    })
  );
}

const userPreferences = JSON.parse(
  localStorage.getItem("user-preferences") || '{theme: "light", lang: "en"}'
) as IUserPreferences;

class changeUserPreference {
  public theme(newTheme: "dark" | "light") {
    userPreferences.theme = newTheme;
    if (newTheme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    document.body.classList.add("fade");

    this.saveChanges();
  }
  public lang(newLang: "pt" | "en") {
    userPreferences.lang = newLang;
    this.saveChanges();
  }
  private saveChanges() {
    localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
  }
}

const ChangeUserPreference = new changeUserPreference();

export {
  IUserPreferences,
  userPreferences,
  userThemePreference,
  ChangeUserPreference,
};
