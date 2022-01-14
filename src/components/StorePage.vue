<template>
  <v-container>
    <h3>
      Products
    </h3>
    <v-row>
      <!-- <v-col
        sm="6"
        md="4"
      > -->
      <Card
        v-for="product in products"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :key="product.id"
      />
      <!-- </v-row> -->
    </v-row>
  </v-container>
</template>

<script>
import Card from './Card.vue';

  export default {
    name: 'StorePage',
    components: {
      Card,
    },
    data: () => ({
      
    }),
    mounted() {
      console.log('store', this.$store.state.products);
    },
    methods: {

    },
    computed: {
      products() {
        const packs = JSON.parse(JSON.stringify(this.$store.state.products));
        return packs

      }
    }
  }
</script>
