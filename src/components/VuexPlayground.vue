<template>
  <div>
    <div v-text="safelyStoredNumber"></div>
    <button @click="incrementStoredNumber">+</button>
    <hr>
    <input v-model="number">
    <button @click="mutateStoredNumber">Set</button>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        number: 0,
      };
    },
    computed: {
      ...mapGetters([
        'safelyStoredNumber',
      ]),
    },
    methods: {
      ...mapMutations([
        'incrementStoredNumber',
        'setStoredNumber',
      ]),
      mutateStoredNumber() {
        this.setStoredNumber(this.number);
      },
    },
  };
</script>