<template>
  <div class="page-result-create">
    <div class="section">
      <p class="title is-2">Create Result</p>
        <div class="columns">
          <div class="column">
            <b-field label="Slug" label-position="on-border">
              <b-input v-model="slug"/>
            </b-field>

            <b-field label="Name" label-position="on-border">
              <b-input v-model="name"/>
            </b-field>

            <b-field label="Team Slug" label-position="on-border">
              <b-input v-model="teamSlug"/>
            </b-field>

            <b-field label="Order" label-position="on-border">
              <b-input v-model="order" type="number" />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Attempts" label-position="on-border" >
              <b-input v-model="attempts"/>
            </b-field>

            <b-field label="Distance" label-position="on-border">
              <b-input v-model="distance"/>
            </b-field>

            <b-field label="Rank" label-position="on-border">
              <b-input v-model="rank" type="number" />
            </b-field>

            <b-field label="Record" label-position="on-border">
              <b-input v-model="record"/>
            </b-field>
          </div>
        </div>

      <b-button type="is-primary" size="is-large" expanded @click="save(result)">Save Result</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Result } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'tom-gale'
  name = 'Tom Gale'
  teamSlug = 'great-britain'
  order = 5
  rank = 11
  record = 'HM'
  distance = '2.30'
  attempts = '2.19: o · 2.24: o · 2.27: o · 2.30: xxx'

  async save (): Promise<void> {
    const { slug, name, teamSlug, order, rank, distance, record, attempts } = this
    const result: Result = { slug, name, teamSlug, order, rank, distance, record, attempts }
    this.$store.dispatch('create-result', result)
    this.$router.push({ name: 'ResultDetails', params: { resultSlug: result.slug } })
  }
}
</script>
