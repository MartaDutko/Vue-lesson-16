<template>
  <div class="block__formSearch">
    <v-btn variant="tonal" @click="onSearch">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </v-btn>
    <v-text-field
      v-model="driver.name"
      label="ПІБ"
      variant="solo"
      clearable
      persistent-clear
      class="custom_width"
    ></v-text-field>

    <v-text-field
      v-model="driver.expFrom"
      label="Стаж роботи від"
      variant="solo"
      clearable
      persistent-clear
      type="number"
      class="custom_width"
    ></v-text-field>

    <v-text-field
      v-model="driver.expTo"
      label="Стаж роботи до"
      variant="solo"
      clearable
      persistent-clear
      type="number"
      class="custom_width"
    ></v-text-field>

    <v-btn variant="tonal" @click="loadListDrivers">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterPage",
  data() {
    return {
      driver: {},
    };
  },
  methods: {
    ...mapActions("drivers", ["loadFilteredDriver", "loadListDrivers"]),
    onSearch() {
      this.loadFilteredDriver({ ...this.driver });
    },
  },
};
</script>

<style lang="scss" scoped>
.block__formSearch {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .custom_width {
    max-width: 20%;
  }
}
</style>