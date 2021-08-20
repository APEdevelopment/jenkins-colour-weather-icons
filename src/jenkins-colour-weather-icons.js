function updateWeatherIcons() {
  for (const svgElement of document.getElementsByClassName("icon-health-80plus")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.css#colour-weather-sunny";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-60to79")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.css#colour-weather-partly-cloudy";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-40to59")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.css#colour-weather-cloudy";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-20to39")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.css#colour-weather-rainy";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-00to19")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.css#colour-weather-pouring";
    }
  }
}

window.addEventListener('load', updateWeatherIcons, false);
