<template>
  <v-app-bar
    app
    color="primary"
    dark
    :fixed="true"
  >
    <div class="d-flex align-center">
      LOGO
    </div>
    <v-tabs
      v-model="tabs"
    >

      <v-tab href="#Home">
            Home
      </v-tab>
      <v-tab href="#Electronics">
            Electronics
      </v-tab>

      <v-tab href="#jewelery">
            Jewelery
      </v-tab>

      <v-tab href="#men's clothing">
            Men's clothing
      </v-tab>

      <v-tab href="#women's clothing">
            Women's clothing
      </v-tab>

      <v-spacer></v-spacer>
      
      <v-text-field
        class="mt-5 mr-3"
        label="Search"
        @input="searchInput"
        v-model.trim="inputValue"
      ></v-text-field>

        <v-tab icon href="#card">
          <v-icon>mdi-cart</v-icon>
        </v-tab>

        <v-tab icon href="#favs">
          <v-icon>mdi-heart</v-icon>
        </v-tab>
      </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    group: null,
    searchInput: '',
    inputValue: '',
    tabs: '',
  })

}
</script>

<style>

</style>