# Weather-App

## Description

This is a weather app that gives you the 5 day forcast based on the location that you select in the dropdown menu. It will then give you the temperature in farenheight, the date, and a brief description of the weather for that day. This uses the weather api in order to pull in the weather based on a given latitude and longitude. I then took the latitude and longitude for 3 main locations (Seattle, Avacado CA, and New York) and added them as drop down selectors. When the selected value for the drop down changes the site generates the cards based on those locations.

## Usage

When the page loads it defaults to Seattle as the top dropdown option. Then if you want to change it you go to the "Select a city" dropdown and then click desired city. When you click it then the cards should change to that city and the weather for it for the next five days.

![a screenshot of the default opening screen](./Assets/Screenshot%202023-04-20%20at%209.41.32%20AM.png)
  ![a screenshot of the dropdown menu](./Assets/Screenshot%202023-04-20%20at%209.42.08%20AM.png)
  ![a screenshot of the page after a new city was selected](./Assets/Screenshot%202023-04-20%20at%209.42.19%20AM.png)

## Credits

The Weather data comes from the https://api.openweathermap.org

The CSS Framwork is Bootstrap

## License

MIT License

Copyright (c) 2023 Alex Horning

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
