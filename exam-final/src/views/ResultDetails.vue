<template>
  <div class="page-result-details">
    <div class="section" v-if="result">
      <p class="title is-2">{{ result.name }}</p>
      <p>{{ result.attempts }}</p>
    </div>
    <div class="section" v-else>
      <p class="title is-2">Result not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Result } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ResultDetails extends Vue {
  get result (): Result | undefined {
    return this.$store.getters.resultsBySlug[this.$route.params.resultSlug]
  }
}
</script>
