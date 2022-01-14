<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="image"
    ></v-img>

    <v-card-text>{{title}}</v-card-text>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <!-- <v-rating
          :value="product.rating.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating> -->

        <!-- <div class="grey--text ms-4">
          {{`${product.rating.rate} (${product.rating.count})`}}
        </div> -->
      </v-row>

      <!-- <div>{{product.description}}</div> -->
      <div>{{`$${price}`}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
     price: {
      type: Number,
      require: true
    }
  },
  data: () => ({
      loading: false,
      selection: 1,
  }),
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>

<style>

</style>