// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Adex",
  icon: "./src/rocketbg.png",

  plugins: [
    // Feed
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Articles',
        feedOptions: {
          title: 'Adex.xyz articles feed',
          description: 'A full stack develop blog covering web technology topics',
          feed_url: 'https://adex.onrender.com/rss.xml',
          site_url: 'https://adex.onrender.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          url: 'https://adex.onrender.com' + node.path
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },

    // Tailwind
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: "./tailwind.config.js",
        mainCssFile: "./src/assets/css/main.css",
      },
    },

    // Source file
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
