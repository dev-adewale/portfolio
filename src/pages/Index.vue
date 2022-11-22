<template>
<Layout>
    <transition name="fade" appear>
        <main class="mt-14 mb-14">
            <div class="contain flex flex-col gap-7">
                <h1 class="font-semibold text-4xl">Hey 👋, I'm Adex.</h1>
                <p class="text-dimGrey leading-8">
                    I'm a full stack developer who loves to craft
                    <span class="text-border">interactive designs✨</span>
                    with modern web technologies. Currently learning backend and databases (<span class="text-border">Go🧩</span >,
                    <span class="text-border">MongoDB🍃</span>) while also solidifying my already acquired knowledge of
                    <span class="text-border">front-end🎨</span>
                    development.
                </p>

                <div class="flex items-center gap-5 text-dimGrey">
                    <p>Find me on:</p>

                    <a href="https://github.com/dev-adewale" target="_blank">
                        <app-icon icon="fab fa-github" size="lg"></app-icon>
                    </a>

                    <a href="https://twitter.com/dev_adeyemi" target="_blank">
                        <app-icon icon="fab fa-twitter" size="lg"></app-icon>
                    </a>

                    <a href="https://discordapp.com/users/dev_adeyemi#1401" target="_blank">
                        <app-icon icon="fab fa-discord" size="lg"></app-icon>
                    </a>

                    <a href="mailto:dev.adewale@gmail.com">
                        <app-icon icon="at" size="lg"></app-icon>
                    </a>
                </div>
            </div>

            <!-- Article List Section -->
            <div class="contain mt-16 flex flex-col gap-3">
                <g-link to="/articles" class="font-semibold text-xl">
                    Posts
                    <app-icon class="text-dimGrey" icon="link" size="sm"></app-icon>
                </g-link>
                <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5" v-for="edge in $page.posts.edges" :key="edge.node.id">
                    <p class="text-dimGreyAlt">{{ edge.node.date }}</p>

                    <g-link :to="edge.node.path" class="text-dimGrey underline underline-offset-4">
                        {{ edge.node.title }}
                    </g-link>

                </article>
            </div>

            <!-- Technologies List Section -->
            <div class="contain mt-16">
                <div class="mb-5">
                    <h2 class="text-xl font-semibold">Technologies</h2>
                    <p class="mt-5">Here's a list of my tech stacks 👇:</p>
                </div>

                <div class="text-dimGrey flex flex-col gap-5 md:leading-none leading-8">
                    <p>
                        <app-icon class="pr-2" icon="fab fa-js" size="lg"></app-icon>
                        <span class="underline underline-offset-4">JavaScript/TypeScript:</span >
                        A scripting language for web page interactivity
                    </p>

                    <p>
                        <app-icon class="pr-2" icon="fab fa-css3" size="lg"></app-icon>
                        <span class="underline underline-offset-4">SCSS/Tailwind CSS:</span >
                        To beautify web pages
                    </p>

                    <p>
                        <app-icon class="pr-2" icon="fab fa-vuejs" size="lg"></app-icon>
                        <span class="underline underline-offset-4">Vue/Nuxt:</span>
                        An advanced MVVM front-end framework
                    </p>

                    <p>
                        <app-icon class="pr-2" icon="fab fa-node" size="lg"></app-icon>
                        <span class="underline underline-offset-4">Node:</span>
                        A cross-platfom open source server environment
                    </p>

                    <p>
                        <app-icon class="pr-2" icon="fab fa-golang" size="lg"></app-icon>
                        <span class="underline underline-offset-4">Go:</span>
                        A statically typed and compiled language for backend
                    </p>

                    <p>
                        <app-icon class="pr-2" icon="database" size="lg"></app-icon>
                        <span class="underline underline-offset-4">MongoDB:</span>
                        A document database that stores data in BSON formart
                    </p>
                </div>
            </div>
        </main>
    </transition>
</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Full-Stack Dev 🤹",
  },
};
</script>

<page-query>
query {
  posts: allArticles(perPage: 3) {
    edges {
      node {
        id
        title
        path
        date
      }
    }
  }
}
</page-query>
