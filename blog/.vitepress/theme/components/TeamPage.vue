<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import bios from './data/author-bios.json'
const members = Object.values(bios)
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>Our Team</template>
      <template #lead>
        Built by the best nerds Panic Nation has to offer.
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
  </VPTeamPage>
</template>
