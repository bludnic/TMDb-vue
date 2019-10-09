<template>
  <v-btn
    :disabled="isLoading"
    :flat="isLoading"
    @click="$emit('click')"
  >
    <v-progress-circular
      v-show="isLoading"
      indeterminate
      color="primary"
      size="24"
      class="mr-3"
    />
    <div v-if="!isLoading">Show More</div>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    isLoading: {
      get (): boolean {
        return this.value
      },
      set (value: boolean) {
        this.$emit('input', value)
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
})
</script>
