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

if (!localStorage.getItem("user-preferences")) {
  localStorage.setItem(
    "user-preferences",
    JSON.stringify({ theme: userThemePreference || "light", lang: "en" })
  );
}

const userPreferences = JSON.parse(
  localStorage.getItem("user-preferences") || '{theme: "light", lang: "en"}'
) as IUserPreferences;

function changeThemeToDark(fade?: boolean): void {
  userPreferences.theme = "dark";
  localStorage.setItem("user-preferences", JSON.stringify(userPreferences));

  document.body.classList.add("dark");
  if (fade) {
    document.body.classList.add("fade");
  }
  document.body.classList.remove("light");
}

function changeThemeToLight(fade?: boolean): void {
  userPreferences.theme = "light";
  localStorage.setItem("user-preferences", JSON.stringify(userPreferences));

  document.body.classList.add("light");
  if (fade) {
    document.body.classList.add("fade");
  }
  document.body.classList.remove("dark");
}

function changeLangToPt(): void {
  userPreferences.lang = "pt";
  localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
}

function changeLangToEn(): void {
  userPreferences.lang = "en";
  localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
}

export {
  IUserPreferences,
  userPreferences,
  userThemePreference,
  changeThemeToDark,
  changeThemeToLight,
  changeLangToPt,
  changeLangToEn,
};
