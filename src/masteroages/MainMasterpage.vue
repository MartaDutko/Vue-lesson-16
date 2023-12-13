<template>
  <nav>
    <v-btn variant="text">
      <router-link to="/"
        ><font-awesome-icon :icon="['fas', 'house']" />
      </router-link>
    </v-btn>
    <v-btn variant="text">
      <router-link :to="{ name: 'drivers' }">Водії</router-link>
    </v-btn>
    <v-btn variant="text">
      <router-link :to="{ name: 'buses' }">Автобуси</router-link>
    </v-btn>
    <v-btn variant="text">
      <router-link :to="{ name: 'appointment' }">Призначення</router-link>
    </v-btn>
    <v-btn variant="text">
      <router-link :to="{ name: 'contacts' }">Контакти</router-link>
    </v-btn>
  </nav>
  <div v-if="isLoading">
    <span>Loading...</span>
    <font-awesome-icon :icon="['fas', 'rotate-right']" />
  </div>
  <div v-else-if="hasError" class="isError">
    <span>Error </span>
    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
  </div>
  <slot v-else></slot>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MainMasterpage",
  computed: {
    ...mapGetters("drivers", ["isLoading", "hasError"]),
  },
};
</script>

<style lang="scss" scoped>
.isError {
  color: red;
}
</style>