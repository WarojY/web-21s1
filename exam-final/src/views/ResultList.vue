<template>
  <div class="page-result-list">
    <div class="section">
    <p class="title is-2">Results</p>
    <div v-for="result in results" :key="result.slug">
      <p>[{{result.distance}}]  P{{ result.rank }}
        <router-link :to="{name: 'ResultDetails', params: { resultSlug: result.slug }}">{{result.name}}
        </router-link>
        <img :src="`/images/records/${result.record}.png`" width="2%" :alt="result.name" />
      </p>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Result } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ResultList extends Vue {
  get results (): Result[] {
    return this.$store.state.results.sort((a: Result, b: Result) => a.rank - b.rank)
  }
}
</script>
