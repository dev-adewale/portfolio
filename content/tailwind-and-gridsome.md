---
title: "How to set up Tailwind CSS with Gridsome"
path: /tailwind-with-gridsome
date: 17 Oct 2022
tags: ["tailwind"]
---

Using Tailwind CSS with Gridsome framework is relatively not easy as using it with other Jamstack frameworks such as Gatsby and many others.

<br>

So, in this guide, I will be showing you how to add and style your Gridsome project with Tailwind CSS in a simple approach. 

<br>

We will also be adding **Autoprefixer** for cross-browser compatibility and **PurgeCSS** to reduce stylesheets size in an attempt to increase website load speed.

<br>

The first thing to do is install **Tailwind CSS**, **PostCSS-PurgeCSS** and **Autoprefixer**. To save time, we will be doing this in one go, run the following command with your terminal: <br><br/>

```json
Yarn: yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
<br>

```json
NPM: npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
<br>

After a successful installation, create a folder named **css** in your **/src** directory and also make a **styles.css** file under the **css** folder. Then add the following content, it consists of tailwind base, components and utilities classes:

<br>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
<br>

Now import the **styles.css** file in your **main.js** file:

<br>

```javascript
import './css/main.css'
```
<br>

We also need to generate a configuration file for Tailwind, run **npx tailwind init** and a **tailwind.config.js** file will be generated in our root directory. Paste in the following config settings:

<br>

```javascript
module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
<br>

Finally, we have to tell Gridsome to add Tailwind, PurgeCSS and Autoprefixer in our project. Paste the following config settings inside the **gridsome.config.js** file:

<br>

```javascript
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'Yoursitename',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
      }
    }
  ],

  templates: {
    Tag: '/tag/:id',
    Post: '/blog/:path',
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind,
          autoprefixer
        ]
      }
    }
  }
}

```
<br>

To verify whether everything is working perfectly or not, restart your project development server by running **gridsome develop** and add these text styles inside a component:

<br>

```html
<h2 class="text-2xl text-center">Tailwind configuration is successful</h2>
```
<br>

Everything should be displaying fine now, which brings us to the end of this guide. If you have any question, comment down below 👇.