export const veggiesMixin = {
  data() {
    return {
      veggies: ['Beetroot', 'Salad', 'Cucumber', 'Courgette'],
      filterText: ''
    }
  },
  computed: {
    filteredVeggies() {
      return this.veggies.filter((element) => {
        return element.match(this.filterText);
      });
    }
  },
  created() {
    console.log('Created')
  }
};
