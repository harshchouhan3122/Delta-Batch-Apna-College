# Tailwind CSS

## Introduction
    - Rapidly build modern websites without leaving your HTML (can use directly in html)
    - Not demanded too much currently in Industries
    - Utility-first framework (main focus is on providing classes)
    - 1 = 0.25 rem = 4px (Important) -> 1rem = 16px
        - 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, ..., 12, 14, 16, 20, 24, 32, 36, 40, 44, 52, 60, 64, 72, 80, 96 

    - It reduces confusion between classes for styling (Sometime we forgot our element className during styling)
    - Bundle Size not increasing significantly (production bundle has only used classses not all the tailwind class bundle)

    - We can apply customize style directly by passing value to [].
        - h-[200px], border-[4px], w-[2rem]
        - but it creates new class when we use [], So it its not prefferable to use frequently



## Installation
    - https://tailwindcss.com/docs/installation
        - Play CDN (or you can setup Tailwind CLI)
            - <script src="https://cdn.tailwindcss.com"></script>

        - (Important) cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI: https://tailwindcss.com/docs/installation

### Setup Tailwind CLI (using PostCSS plugin method) (install Node first if not)
-> Skip this step if you are using Tailwind using CDN link (internet required)
-> https://tailwindcss.com/docs/installation/using-postcss

    - npm install -D tailwindcss postcss autoprefixer
    - npm i vite (to avoid borwser reloading again and again manually)
    - npx tailwindcss init -p
        -> -p creates postcss file separately

    - in tailwind.config.js
        - Change the Content [] to ["*"] -> we wanna use this css everywhere, otherwise we can mention the filenames where we want to use this tailwind css
    
    - create style.css (include tailwind main layers in your .css file)
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    
    - change package.json (because we are using vite, start building project from the vite)
        "scripts":{
            "start":"vite",
        }

    
    -> Now you can link your style.css to you index.html

    - npm run start


## Typography & Sizing

### Typography
-> Font-Family: https://tailwindcss.com/docs/font-family (font-sans, serif, mono)
-> Font-Size: https://tailwindcss.com/docs/font-size (text-xs,sm,base,lg,xl,2 to 9xl)
-> Font-Weight: https://tailwindcss.com/docs/font-weight (font-thin, extrathin, light, normal, medium, semibold, bold, extrabold, black)

-> Letter Spacing: https://tailwindcss.com/docs/letter-spacing (tracking-tighter, tight, normal, wide, wider, widest)
-> Text Alignment: https://tailwindcss.com/docs/text-align (text-left, center, right, justify, start, end)

### Sizing (1 = 4px, full = 100%, screen = vh, vw)
-> Width: https://tailwindcss.com/docs/width (w-0, px, 0.5, 1, 1.5, 2, 2.5, 3, auto, 1/4, full, screen, min, max, fit)
-> Height: https://tailwindcss.com/docs/height
-> Size : https://tailwindcss.com/docs/size



## Styling

### Colors
-> Text-Color: https://tailwindcss.com/docs/text-color (text-inherit, current, transparent, red-500, white, black)
-> Background-Color: https://tailwindcss.com/docs/background-color (bg-inherit, current, transparent, red-500, white, black)

### Spacing (Also accept -ve value -> -ml-4)
-> Margin : (https://tailwindcss.com/docs/margin) -> (ml, mt, mr, mt, m-4, mx-4, my-4, ms, me)
-> Padding : (https://tailwindcss.com/docs/padding) -> (p-4, px-4, py-4, pl, pt, pb, pr)
-> Space Between: (https://tailwindcss.com/docs/space) -> (space-x-4 (margin-left, used with flex mostly), space-y-6 (margin-top))

### Flex Box
-> Flex : (https://tailwindcss.com/docs/flex) (flex-1, flex-auto, initial, none)
-> Flex basis : (https://tailwindcss.com/docs/flex-basis) (flex, flex-row, basis-1/4 basis-3/4)
-> Flex Direction : (https://tailwindcss.com/docs/flex-direction) (flex-row, col, row-reverse, col-reverse)
-> Flex Wrap : (https://tailwindcss.com/docs/flex-wrap) (flex-wrap, wrap-reverse, nowrap, md:flex-wrap-reverse, hover:flex-wrap-reverse)
-> Justify Content: (https://tailwindcss.com/docs/justify-content) (justify-normal, start, end, center, between, around, evenly, justify-stretch (for grid))
-> Align Content: (https://tailwindcss.com/docs/align-content) (content-normal, start, end, center, between, around, evenly, justify-stretch (for grid))
-> Gap: (https://tailwindcss.com/docs/gap) (gap-4, gap-x, gap-x)

### Border
-> Border : (https://tailwindcss.com/docs/border-style) -> (border-0, border-r-4, l, t, b, x, y)
-> Border-Color: (https://tailwindcss.com/docs/border-color) -> (border-red-100, to 900)
-> Border-radius: (https://tailwindcss.com/docs/border-radius) -> (rounded-none, rounded-sm, b, md, lg, xl, 2xl, rounded-s-lg, ss, ee, se, es)

## Breakpoints in Tailwind (use with :)
-> https://tailwindcss.com/docs/responsive-design
-> sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)

    <div class="border-2 border-black sm:bg-orange-400 md:bg-transparent lg:bg-blue-500">Lorem ipsum </div>
    -> here when we define property for md means its will be applicable to screen >= 768px (It will work for lg, xl, 2xl)

## Apply Directives (Important)
-> Use @apply to inline any existing utility classes into your own custom CSS

    <div class="border-2 border-black bg-slate-300">Lorem ipsum, dolor sit </div>
    <div class="border-2 border-black bg-slate-300">Lorem ipsum, dolor sit </div>
    <div class="border-2 border-black bg-slate-300">Lorem ipsum, dolor sit </div>

-> Here Our 3 div has same property which increase the code redundancy, So we will use Apply Directives here
    -> Change style.css
        .box{
            @apply border-2 border-black bg-slate-300;
        }

    -> And then give elements className as box
        -> It is also written using tailwind utility classes


## Design a card in Taailwind