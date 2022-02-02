<template>
  <base-card>
    <base-button @click="setSelectedTab(enumTab.LIST)" :mode="buttonMode(enumTab.LIST)">Resources List</base-button>
    <base-button @click="setSelectedTab(enumTab.ADD)" :mode="buttonMode(enumTab.ADD)">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab" :selected-tab="selectedTab"></component>
</template>

<script>
import BaseCard from '../UI/BaseCard'
import BaseButton from '../UI/BaseButton'
import ResourceList from './ResourceList'
import ResourceAdd from './ResourceAdd'
import { RESOURCE_TAB } from '../../constants'


export default {
  name: 'index',
  components: {
    BaseCard,
    BaseButton,
    ResourceList,
    ResourceAdd
  },

  data() {
    return {
      enumTab: RESOURCE_TAB,
      selectedTab: RESOURCE_TAB.LIST,
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://www.google.com'
        }
      ]
    }
  },
  providers: ['selectedTab'],
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      selectedTab: this.selectedTab,
      removeResource: this.removeResource
    }
  },

  methods: {
    setSelectedTab(selectedTab) {
      this.selectedTab = selectedTab
    },
    buttonMode(identifier) {
      return this.selectedTab === identifier ? null : 'flat'
    },
    addResource(resource) {
      resource.id = new Date().toISOString()
      this.storedResources.unshift(resource)
      this.setSelectedTab(RESOURCE_TAB.LIST)
    },
    removeResource(id) {
      const index = this.storedResources.findIndex(resource => resource.id === id)
      this.storedResources.splice(index, 1)
    }
  }

}
</script>

<style scoped>

</style>
