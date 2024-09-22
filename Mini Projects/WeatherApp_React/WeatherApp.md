# Weather App

## Material UI
    - It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box and features a suite of customization options that make it easy to implement your own custom design system on top of our components.
    - https://mui.com/material-ui/getting-started/

    - Installation
        - https://mui.com/material-ui/getting-started/installation/
        - npm create vite (React -> JS)
        - npm install (then npm run dev)

        - npm install @mui/material @emotion/react @emotion/styled
        - npm install @fontsource/roboto
        - npm install @mui/icons-material
    
    - Components
        - Buttons
        - Rating
        - Sliders
        - Switches
        - Alerts
        - Card Components

    - Try to import and display component in App.jsx

## Building Search Box
    - using react and MaterialUI
    - Basic Design
        - Search bar
        - Search Button
        - Card with Details
        - Weather API

        - Integret the API data witht the search box

        - SearchBox.jsx
        - SearchBox.css

## Weather API
    - https://openweathermap.org/current
    - Sign in -> harsh2020
    - https://openweathermap.org/current#geocoding
    - create .env file (OPTIONAL but good to go with it, as its secure)

    - Try to understand the response of the weather API

## Build Weather Widget
    - App Comp
        - Weather App
            - Search Box
                - return Result
            - Info Box

    - MaterialUI -> use Cards
    - Image -> unsplash 
    - InfoBox.jsx

## Weather App Component
    - Merge the SearchBox and InfoBox 
    - Handeling the error for the city which is not exists in the API
        - Use try catch block in SearchBox.jsx

## Advance Features
    - Change the Image based on Humidity and Temperature
        image={
            info.humidity > 80 ? IMG_URL_RAIN : (info.temp < 15 ? IMG_URL_COLD : (info.temp > 35 ? IMG_URL_HOT : IMG_URL_CLOUDY ))
        }

    - Change the Icon beside city based on Humidity and Temperature
        - Import ICONS (https://mui.com/material-ui/material-icons/?query=weather)

