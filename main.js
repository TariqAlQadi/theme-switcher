const colorThemes = document.querySelectorAll('[name="theme"]');

//store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

//apply theme
const retrieveTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

//so it retrieves theme on first load of the page
document.onload = retrieveTheme();
