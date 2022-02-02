<template>
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
  props: {
    selectedTab: String
  },
  data() {
    return {
      activeResource: null,
      enumTab: RESOURCE_TAB
    }
  },
  inject: ['storedResources'],
  mounted() {
    this.setActiveResource(this.storedResources[0])
  },
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
