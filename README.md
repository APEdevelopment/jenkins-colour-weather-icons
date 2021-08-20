# jenkins-colour-weather-icons

![Alt text](./images/jenkins-colour-weather-icons.png?raw=true "Jenkins Colour Weather Icons")

This theme for Jenkins will replace the default blue weather icons with coloured icons.  It requires the [Simple Theme Plugin](https://plugins.jenkins.io/simple-theme-plugin/).

To add the theme go to the "Manage Jenkins -> Configure System" page and under the "Theme elements" section add the following:<br/>
CSS URL:
```text
https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.css
```
JS URL:
```text
https://cdn.jsdelivr.net/gh/APEdevelopment/jenkins-colour-weather-icons/src/jenkins-colour-weather-icons.js
```

If you are hosting the files on your own server then you will need to edit the JS file and point it at the CSS file you are hosting.
