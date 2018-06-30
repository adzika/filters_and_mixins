<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | toLowercase}}</p>
        <hr>
        <button @click="veggies.push('Potatoes')">Add new item</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredVeggies">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>

</template>

<script>
  import List from './List.vue'
  import { veggiesMixin } from "./veggiesMixin";

  export default {
    mixins: [veggiesMixin],
    data() {
      return {
        text: 'Hello there!',
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>

</style>
