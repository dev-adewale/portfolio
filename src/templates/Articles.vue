<template>
  <Layout>
    <article class="contain mt-14 mb-14">
      <div class="flex md:flex-row flex-col justify-between md:items-center items-start mb-14">
        <div>
          <h1 class="font-semibold text-2xl mb-5">{{ $page.post.title }}</h1>

          <div class="flex items-center text-dimGrey text-sl">
            <p class="border-r-2 border-solid border-dimGrey pr-3">
              {{ $page.post.date }}
            </p>
            <p class="pl-3">☕ {{ $page.post.timeToRead }} min read</p>
          </div>
        </div>

        <!-- Tags -->

        <div class="flex items-center gap-1 mt-3 md:mt-0">
          <app-icon icon="tags" size="lg"></app-icon>
          <g-link
            class="underline underline-offset-4"
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
          >
            #{{ tag.title }}
          </g-link>
        </div>
      </div>

      <main class="text-dimGrey" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<page-query>
query Articles($path: String!) {
  post: articles(path: $path) {
    title
    path
    date
    timeToRead
    content
    tags {
      id
      title
      path
    }
  }
}

</page-query>