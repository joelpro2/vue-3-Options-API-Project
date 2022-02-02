<template>
  <!-- Vue 3 uses Partials, so a root element is not needed anymore -->
  <!-- Binds the content to the css selector provided -->
  <teleport to="#header" v-if="selectedTab === enumTab.ADD">
    <the-header title="Add Resource"></the-header>
  </teleport>

  <base-dialog v-if="isInvalid" title="Invalid Input" @close="closeDialog">
    <template #default>
      <p>All fields are required</p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">OK</base-button>
    </template>
  </base-dialog>

  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model.trim="form.title">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" v-model.trim="form.description"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model.trim="form.link">
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import TheHeader from '../layout/TheHeader'
import BaseCard from '../UI/BaseCard'
import BaseButton from '../UI/BaseButton'
import BaseDialog from '../UI/BaseDialog'
import { RESOURCE_TAB } from '../../constants'

export default {
  name: 'ResourceAdd',
  components: {
    TheHeader,
    BaseCard,
    BaseButton,
    BaseDialog
  },

  data() {
    return {
      enumTab: RESOURCE_TAB,
      form: {},
      isInvalid: false
    }
  },

  // Injects variables provided by some ancestor.
  inject: ['selectedTab', 'addResource'],

  methods: {
    submit() {
      if (this.form.title && this.form.description && this.form.link) {
        this.addResource(this.form)
      } else {
        this.isInvalid = true
      }
    },
    closeDialog() {
      this.isInvalid = false
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
