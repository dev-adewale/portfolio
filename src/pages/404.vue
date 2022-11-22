<template>
    <main class="mb-10 md:h-full h-screen">
        <div class="flex flex-col justify-center items-center">
            <em class="md:text-[15.625rem] text-[10rem]">404!</em>
            <g-link class="bg-dimGreyAlt py-2 px-3 rounded-sm" to="/">
              Go Home 🏠
            </g-link>
        </div>
    </main>
</template>

<script>

  export default {
    metaInfo: {
      title: "404 - Not found 😫",
    },
  }
</script>

<style>
em {
animation: change_colors 6s infinite;
color: #C9CACC;
font-weight: bold;
font-family: 'consolas', monospace;
text-shadow:
  0 .005em 0 rgba(0, 0, 0, .2),
  0 .005em 0 currentColor,

  0 .01em 0 rgba(0, 0, 0, .25),
  0 .01em 0 currentColor,

  0 .015em 0 rgba(0, 0, 0, .3),
  0 .015em 0 currentColor,

  0 .02em 0 rgba(0, 0, 0, .35),
  0 .02em 0 currentColor,

  0 .025em 0 rgba(0, 0, 0, .4),
  0 .025em 0 currentColor,

  0 .03em .005em rgba(0, 0, 0, .1),
  0 0 .025em rgba(0, 0, 0, .1),
  0 .005em .015em rgba(0, 0, 0, .3),
  0 .015em .025em rgba(0, 0, 0, .2),
  0 .025em .05em rgba(0, 0, 0, .25),
  0 .05em .05em rgba(0, 0, 0, .2),
  0 .1em .1em rgba(0, 0, 0, .15);
}

/* @keyframes change_colors {
0% { color: #5150ea; }
12% { color: #f24155; }
25% { color: #ef4b7d; }
37% { color: #fd4a82; }
50% { color: #fc7f63; }
62% { color: #6665ed; }
75% { color: #62ccfe; }
87% { color: #ac39df; }
100% { color: #aa66f7; }
} */
</style>
