<template>
  <!-- Vue 3 uses Partials, so a root element is not needed anymore -->
  <!-- Binds the content to the css selector provided -->
  <teleport to="#header" v-if="selectedTab === enumTab.LIST">
    <the-header v-if="activeResource" :title="activeResource.title"></the-header>
  </teleport>

  <ul>
    <resource-item v-for="resource in storedResources" :key="resource.id" :resource="resource"
                   @click="setActiveResource(resource)"
                   :class="{'active': activeResource.id === resource.id}"></resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem'
import TheHeader from '../layout/TheHeader'
import { RESOURCE_TAB } from '../../constants'

export default {
  name: 'ResourceList',
  components: {
    ResourceItem,
    TheHeader
  },

  data() {
    return {
      activeResource: this.storedResources[0],
      enumTab: RESOURCE_TAB
    }
  },

  // Injects variables provided by some ancestor.
  inject: ['selectedTab', 'storedResources'],

  methods: {
    setActiveResource(activeResource) {
      this.activeResource = activeResource
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
