<template>
<Layout>
    <transition name="fade" appear>
        <main class="contain mt-14 mb-14">
            <h1 class="text-2xl font-semibold mb-10">Projects</h1>

            <div class="md:grid md:grid-cols-3 md:gap-5 gap-7 flex flex-col">

                <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                    <h2 class="font-semibold text-xl">Cars JSON API</h2>
                    <p class="text-dimGrey">A car json API with functional endpoints</p>

                    <div class="flex gap-3">
                        <p>
                            <app-icon class="text-green" icon="eye" size="sm"></app-icon>
                            Live
                        </p>

                        <p>
                            <app-icon class="text-green" icon="code-fork" size="sm"></app-icon>
                            Code
                        </p>
                    </div>
                </div>

                <!-- Second project -->
                <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                    <h2 class="font-semibold text-xl">My Portfolio</h2>
                    <p class="text-dimGrey">This personal portfolio + blog you're on</p>

                    <div class="flex gap-3">
                        <p>
                            <app-icon class="text-green" icon="eye" size="sm"></app-icon>
                            Live
                        </p>

                        <p>
                            <app-icon class="text-green" icon="code-fork" size="sm"></app-icon>
                            Code
                        </p>
                    </div>
                </div>

                <!-- Third project -->
                <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                    <h2 class="font-semibold text-xl">Filemonger</h2>
                    <p class="text-dimGrey">File management website, similar to dropbox</p>

                    <div class="flex gap-3">
                        <p>
                            <app-icon class="text-green" icon="eye" size="sm"></app-icon>
                            Live
                        </p>

                        <p>
                            <app-icon class="text-green" icon="code-fork" size="sm"></app-icon>
                            Code
                        </p>
                    </div>
                </div>

                <!-- Fourth project -->
                <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                    <h2 class="font-semibold text-xl">Cryptomania</h2>
                    <p class="text-dimGrey">A crypto website displaying the market in real time</p>

                    <div class="flex gap-3">
                        <p>
                            <app-icon class="text-green" icon="eye" size="sm"></app-icon>
                            Live
                        </p>

                        <p>
                            <app-icon class="text-green" icon="code-fork" size="sm"></app-icon>
                            Code
                        </p>
                    </div>
                </div>

                <!-- Fifth project -->
                <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                    <h2 class="font-semibold text-xl">Birdie</h2>
                    <p class="text-dimGrey">A social media chatting app</p>

                    <div class="flex gap-3">
                        <p>
                            <app-icon class="text-green" icon="eye" size="sm"></app-icon>
                            Live
                        </p>

                        <p>
                            <app-icon class="text-green" icon="code-fork" size="sm"></app-icon>
                            Code
                        </p>
                    </div>
                </div>

                <!-- Six project -->
                <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                    <h2 class="font-semibold text-xl">Jobbify</h2>
                    <p class="text-dimGrey">A job board application using Indeed API</p>

                    <div class="flex gap-3">
                        <p>
                            <app-icon class="text-green" icon="eye" size="sm"></app-icon>
                            Live
                        </p>

                        <p>
                            <app-icon class="text-green" icon="code-fork" size="sm"></app-icon>
                            Code
                        </p>
                    </div>
                </div>

            </div>
        </main>
    </transition>
</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Notable projects ⚒",
  },
};
</script>
