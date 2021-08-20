function updateWeatherIcons() {
  for (const svgElement of document.getElementsByClassName("icon-health-80plus")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "#colour-weather-sunny";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-60to79")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "#colour-weather-partly-cloudy";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-40to59")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "#colour-weather-cloudy";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-20to39")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "#colour-weather-rainy";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-health-00to19")) {
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "#colour-weather-pouring";
    }
  }
}

window.addEventListener('load', updateWeatherIcons, false);
