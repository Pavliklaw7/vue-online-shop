<template>
  <v-app>
    <Header/>
    <v-main>
      <Breadcrumps :items="this.getProducts" />
      <StorePage/>
    </v-main>
  </v-app>
</template>

<script>
import StorePage from './components/StorePage.vue';
import Header from './components/Header';
import Breadcrumps from './components/Breadcrumps.vue';


export default {
  name: 'App',

  components: {
    StorePage,
    Header,
    Breadcrumps,
  },

  data: () => ({
         items: [
        {
          text: 'Home',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
      ],
  }),
  mounted() {
    this.$store.dispatch("fetchAllProducts");
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    }
  }
};
</script>
