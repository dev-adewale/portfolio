<template>
  <Layout>
    <transition name="fade" appear>
      <main class="contain mt-14 mb-14">
        <h1 class="text-2xl font-semibold mb-5">Tag: {{ $page.tag.title }}</h1>

        <article v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
          <g-link
            class="
              flex
              md:flex-row
              flex-col
              md:items-center
              items-start
              md:gap-10
              gap-0
              md:pb-3
              pb-7
            "
            :to="post.node.path"
          >
            <p class="text-dimGreyAlt">{{ post.node.date }}</p>
            <h2 class="decoration-cuppy underline underline-offset-4">{{ post.node.title }}</h2>
          </g-link>
        </article>
      </main>
    </transition>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Tag ==>" + " " + this.$page.tag.title
    }
  },
};
</script>

<page-query>
query Tag ($id: ID!) {
  tag: tag (id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ...on Articles {
            title
            date
            path
          }
        }
      }
    }
  }
}
</page-query>