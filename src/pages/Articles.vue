<template>
<Layout>
    <transition name="fade" appear>
        <main class="contain mt-14 mb-14">
            <h2 class="text-2xl font-semibold mb-14">Posts</h2>

            <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-7" v-for="edge in $page.posts.edges" :key="edge.node.id">
                <p class="text-dimGreyAlt text-sl">{{ edge.node.date }}</p>

                <g-link :to="edge.node.path" class="text-dimGrey decoration-cuppy underline underline-offset-4">
                    {{ edge.node.title }}
                </g-link>
            </article>
        </main>
    </transition>
</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "All articles 📝",
  },
};
</script>

<page-query>
query {
  posts: allArticles(perPage: 20) {
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
