import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '@/api/index';
import { PRODUCTS_BY_CATEGORY } from "@/api/routes.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    dialogVisible: false,
    currentProduct: {},
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    showDialog(state) {
      state.dialogVisible = true;
    }, 
    hideDialog(state) {
      state.dialogVisible = false;
    },
    setCurrentProduct(state, payload) {
      state.currentProduct = payload;
    }
  },
  actions: {
    fetchAllProducts({commit}) {
      // fetch('https://fakestoreapi.com/products/1')
      //       .then(res=>res.json())
      //       .then(json=>console.log(json))


      return axiosInstance.get('https://fakestoreapi.com/products')
      .then(({data}) => {
        console.log('data', data)
        commit('setProducts', data);
      })
    },
    fetchCatrgoryProducts({commit}, query) {
      return axiosInstance.get(PRODUCTS_BY_CATEGORY(query))
      .then(({data}) => {
        const {objects} = data;
        commit('setPackages', objects);
      })
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentProduct: (state) => state.currentProduct,

  },
  modules: {
  }
})
