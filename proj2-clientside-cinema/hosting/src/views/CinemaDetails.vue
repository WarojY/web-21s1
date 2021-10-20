<template>
  <div class="cinema-details">
    <h1 class="title">{{ screenings.cinemaName }}</h1>
    <div class="screening-grid">
      <router-link
        v-for="screening in screenings"
        :key="screening.id"
        :to="{
          name: 'Book',
          params: { slug: cinemaslug },
        }"
        ><img
          :src="`/images/films/${screening.filmSlug}.jpg`"
          alt="screening.filmname"
        />
        <p class="is-size-6">Screen {{ screening.screen }}</p>
        <p class="is-size-3 has-text-weight-medium">
          {{ screening.timeString }}
        </p>
        <p class="is-size-5 has-text-weight-light">{{ screening.filmName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Screening } from '@/store/models'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['screenings'])
})
export default class CinemaDetails extends Vue {
  get screening (): Screening | null {
    return this.$store.getters.screeningsForCinema[this.$route.params.slug] ?? null
  }
}
</script>

<style scoped>
.screening-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
}
</style>
