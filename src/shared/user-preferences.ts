interface IUserPreferences {
  theme: "dark" | "light";
  lang: "en-US" | "pt-BR";
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
    JSON.stringify({ theme: userThemePreference || "light", lang: "en-US" })
  );
}

const userPreferences = JSON.parse(
  localStorage.getItem("user-preferences") || '{theme: "light", lang: "en-US"}'
) as IUserPreferences;

// Functions to manage theme
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

export {
  IUserPreferences,
  userPreferences,
  userThemePreference,
  changeThemeToDark,
  changeThemeToLight,
};
