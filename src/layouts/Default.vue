<template>
  <div>
    <header class="contain flex justify-between items-center h-40">
      <h1 class="text-3xl text-dimGrey font-bold">
        <g-link to="/">🚀Adex</g-link>
      </h1>

      <nav class="hidden md:flex items-center gap-3 text-green">
        <g-link
          class="hover:underline border-r-2 border-dashed border-green pr-4"
          to="/"
          >Home</g-link
        >
        <g-link class="hover:underline" to="/projects/">Projects</g-link>
        <g-link
          class="hover:underline border-l-2 border-dashed border-green pl-4"
          to="/articles/"
          >Articles</g-link
        >
      </nav>
      <div class="md:hidden block">
        <app-icon
          @click.prevent="
            () => {
              showMenu = !showMenu;
            }
          "
          class="cursor-pointer"
          icon="bars"
          size="lg"
        ></app-icon>
      </div>
    </header>

    <!-- Mobile Nav -->

    <header
      :class="[showMenu ? 'hidden' : 'fixed']"
      class="transition ease-in duration-500 h-32 w-full bg-[#1D1F21] md:hidden top-28 left-0 right-0"
    >
      <nav
        class="w-11/12 mx-auto flex flex-col items-end gap-3 text-green pt-3"
      >
        <g-link to="/">Home</g-link>
        <g-link to="/projects/">Projects</g-link>
        <g-link to="/articles/">Articles</g-link>
      </nav>
    </header>

    <!-- Mobile Nav Ends -->

    <slot />

    <footer class="contain flex justify-between mb-5 text-sl text-dimGreyAlt">
      <p>Copyright © 2022 🚀</p>

      <nav class="flex gap-2">
        <a class="border-r-2 border-solid border-dimGreyAlt pr-3" href=""
          >RSS</a
        >
        <a href="">Sitemap</a>
      </nav>
    </footer>
  </div>
</template>

<script>

export default {

  data() {

    return {
      showMenu: true,
    }
  },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>