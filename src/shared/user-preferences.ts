interface IUserPreferences {
  theme: "dark" | "light";
  lang: "en-US" | "pt-BR";
}

if (!localStorage.getItem("user-preferences")) {
  localStorage.setItem(
    "user-preferences",
    JSON.stringify({ theme: "light", lang: "en-US" })
  );
}
export const userPreferences = JSON.parse(
  localStorage.getItem("user-preferences") || '{theme: "light", lang: "en-US"}'
) as IUserPreferences;

export function changeThemeToDark(fade?: boolean): void {
  userPreferences.theme = "dark";
  localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
  document.body.classList.add("dark");
  if (fade) {
    document.body.classList.add("fade");
  }
  document.body.classList.remove("light");
}

export function changeThemeToLight(fade?: boolean): void {
  userPreferences.theme = "light";
  localStorage.setItem("user-preferences", JSON.stringify(userPreferences));
  document.body.classList.add("light");
  if (fade) {
    document.body.classList.add("fade");
  }
  document.body.classList.remove("dark");
}
