---
title: "Rendering lists with V-for in Vue"
path: /vue-v-for
date: 21 Oct 2022
tags: ["vue", "forloop"]
---

In almost every front end project, there will come a point where we need to **iteratively** render some elements on the page. If you're a vue developer or just playing around with it, iterating over arrays or objects can be achieved with the **v-for** directives.

<br>

Using **v-for** in **Vue** will look something like this:

<br>

```vue
<template>
	<div v-for="item in items">
		{{ item.object }}
	</div>
</template>
```

<br>

Now that you've gotten a sneak preview, let's take a look at how we can use the **v-for** directives in a real world project.

<br>

### #How to use v-for in Vue

<br>

Just for the sake of this guide, let's imagine we want to iterate over a list of products and output them on the page while working on a eCommerce website. Below is a static lists of products we want to output:

<br>

```vue
<template> </template>

<script>
export default {
	data() {
		return {
			products: [
				{ id: 1, name: "Apple iPhone 14", price: 2000, inStock: true },
				{ id: 2, name: "Airpod", price: 250, inStock: true },
				{ id: 3, name: "Samsung s22 Ultra", price: 1700, inStock: true },
				{ id: 4, name: "Apple iPhone X", price: 500, inStock: false },
				{ id: 5, name: "Tecno Premier", price: 300, inStock: true },
			],
		};
	},
}
</script>
```

<br>

Now that we've got our data statically ready, we can iteratively work with them in our **template** tag like so 👇:

<br>

```html
<div v-for="product in products">
    <h2> {{ product.name }} </h2>
    <p> {{ product.price }} </p>
    <!-- Use the **inStock** field to make something happen based on it's value -->
</div>
```
<br>

Even though the data will be displayed on our page now, to further solidify our **code**, we still have one thing left to do. Our elements doesn't have a unique identity called (**key**) attached to them, it is recommended to do so for a few reasons.

<br>

### #Add key to Vue v-for loops

<br>

You might be wondering 🤔, what is a **key** in Vue? A simple explanation is, it is a special attribute and a way of giving Vue a hint to track each of our page node's identity. If a **key** isn't provided for a node, the element movement will be minimized when **DOM** is getting updated.

<br>

To attach a unique **key** to the node, we have to bind it using **:key="nodeId"**. So let's update our product data which we created earlier like so:

<br>

```html
<div v-for="product in products" :key="product.id">
    <h2> {{ product.name }} </h2>
    <p> {{ product.price }} </p>
    <!-- Use the **inStock** field to make something happen based on it's value -->
</div>
```
<br>

Using a **v-for** directives to dynamically render an **array** or **object** containing data is as simple as that. If you have any question or simply have a way to further improve the code used, comment 💬 below.