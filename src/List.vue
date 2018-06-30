<template>
  <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredVeggies">{{ fruit }}</li>
        </ul>
  </div>
</template>

<script>
  import { veggiesMixin } from './veggiesMixin'

  export default {
   mixins: [veggiesMixin],
    created() {
     console.log('Inside list created hook')
    }
  }
</script>

<style>

</style>
