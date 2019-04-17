<template>
  <div>
      <h1>{{animals.name}}({{$route.params.species}})</h1>
      <p>Age {{animals.age}} Years Old</p>
      <p>Breed: {{animals.breed}}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      animals: {}
    };
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted() {
    const animals = this[this.$route.params.species][this.$route.params.id];
    this.animals = animals
  }
};
</script>
