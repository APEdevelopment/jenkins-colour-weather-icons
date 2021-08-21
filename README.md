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

If wish to host the theme on your own web server rather than loading it from cdn.jsdelivr.net then you need to place the .css file and the .js file in the same folder and they need to have identical names apart from the extension.

At some point I will make this a pure CSS implementation and so the .js file will go away.
