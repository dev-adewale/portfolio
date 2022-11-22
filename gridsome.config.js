// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Adex",
  icon: "./src/rocketbg.png",

  plugins: [
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: "./tailwind.config.js",
        mainCssFile: "./src/assets/css/main.css",
      },
    },

    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/**/*.md",
        typeName: "Articles",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-shiki",
              { theme: "nord", skipInline: false },
            ],
          ],
        },

        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],

  templates: {
    Articles: "/article/:title",
    Tag: "/tag/:id",
  },
};
