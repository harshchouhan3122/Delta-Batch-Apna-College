# Tailwind CSS

## Introduction
    - Rapidly build modern websites without leaving your HTML
    - Not demanded too much currently in Industries
    - Utility-first framework
    - 1 = 0.25 rem

    - It reduces confusion between classes for styling
    - Bundle Size not increasing significantly


## Installation
    - https://tailwindcss.com/
        - Play CDN
            - <script src="https://cdn.tailwindcss.com"></script>

        - cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI: https://tailwindcss.com/docs/installation

### Tailwind CLI
    - npm install -D tailwindcss
    - npm i vite (to avoid borwser reloading again and again manually)
    - npx tailwindcss init -p

    - tailwind.config.js
        - Change the Content [] to [*] -> we wanna use this css everywhere
    
    - create style.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    
    - change package.json
        "scripts":{
            "start":"vite",
        }

    - npx tailwindcss -i ./src/input.css -o ./src/output.css --watch