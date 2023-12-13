<template>
  <div v-if="isLoading">
    <span>Loading...</span>
    <font-awesome-icon :icon="['fas', 'rotate-right']" />
  </div>
  <div v-else-if="hasError" class="isError">
    <span>Error </span>
    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
  </div>

  <template v-else>
    <div class="block__form">
      <v-sheet width="300" class="mx-auto">
        <v-form fast-fail>
          <v-text-field
            v-model="driver.name"
            label="Name"
            :rules="nameRules"
          ></v-text-field>

          <v-text-field
            v-model="driver.exp"
            label="Expirience"
            type="number"
            :rules="expRules"
          ></v-text-field>

          <v-btn type="submit" block class="mt-2" @click="onApdate">{{
            btnTittle
          }}</v-btn>
          <v-btn type="submit" block class="mt-2" @click="onCancel"
            >Скасувати</v-btn
          >
        </v-form>
      </v-sheet>
    </div>
  </template>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DriverForm",

  props: {
    id: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    driver: {},
    nameRules: [
      (value) => {
        if (value?.length > 3) return true;
        return "Name must be at least 3 characters.";
      },
    ],
    expRules: [
      (value) =>
        (value && value.trim().length > 0) || "Поле не може бути порожнім.",
    ],
  }),
  computed: {
    ...mapGetters("drivers", ["isLoading", "hasError", "getDriverById"]),

    btnTittle() {
      return this.id ? "Змінити" : "Додати";
    },
  },
  created() {
    this.driver = { ...this.getDriverById(this.id) };
  },
  methods: {
    ...mapActions("drivers", ["addDriver", "updateDriver"]),
    resetForm() {
      // Скидання форми до початкового стану
      this.driver = {};
    },
    onApdate(event) {
      event.preventDefault();
      if (this.id) {
        this.updateDriver({
          itemId: this.id,
          data: {
            name: this.driver.name,
            exp: this.driver.exp,
          },
        });
      } else {
        this.addDriver({ ...this.driver });
      }
      this.resetForm();
      this.$router.push({
        name: "drivers",
      });
    },
    onCancel() {
      this.resetForm();
      this.$router.push({
        name: "drivers",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.block__form {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>