<template>
  <div v-if="authorData" class="author-box">
    <img
      class="author-img"
      :src="imageSrc"
      @error="onImageError"
      alt="Author image"
    />
    <div>
      <div class="author-name">Written by {{ authorData.name }}</div>
      <div v-if="authorData.bio" class="author-bio">{{ authorData.bio }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import bios from '../data/author-bios.json'

const { frontmatter } = useData()
const rawName = frontmatter.value.author
const slug = rawName?.toLowerCase().replace(/\s+/g, '-') || 'unknown'

const authorData = bios[slug] || {
  name: rawName || 'Unknown Author',
  bio: ''
}

const supportedExtensions = ['webp', 'jpg', 'jpeg', 'png']
const currentExtensionIndex = ref(0)
const imageSrc = ref(`/authors/${slug}.${supportedExtensions[0]}`)

function onImageError() {
  currentExtensionIndex.value++

  if (currentExtensionIndex.value < supportedExtensions.length) {
    const nextExt = supportedExtensions[currentExtensionIndex.value]
    imageSrc.value = `/authors/${slug}.${nextExt}`
  } else {
    imageSrc.value = `/authors/default.jpg`
  }
}
</script>

<style scoped>
.author-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
}

.author-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
}

.author-name {
  font-weight: 600;
  font-size: 1rem;
}

.author-bio {
  font-size: 0.9rem;

  margin-top: 0.25rem;
}
</style>
