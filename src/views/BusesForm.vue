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
            v-model="bus.number"
            label="Number bus"
            :rules="numberRules"
          ></v-text-field>

          <v-text-field
            v-model="bus.numberOfSeats"
            label="Number of seats"
            type="number"
            :rules="numberOfSeatsRules"
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BusesForm",

  props: {
    id: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    bus: {},
    numberRules: [
      (value) => {
        if (value?.length > 3) return true;
        return "Name must be at least 3 characters.";
      },
    ],
    numberOfSeatsRules: [
      (value) =>
        (value !== null &&
          value !== undefined &&
          value !== "" &&
          !isNaN(value)) ||
        "Поле не може бути порожнім та має бути числовим значенням.",
    ],
  }),
  computed: {
    ...mapGetters("buses", ["isLoading", "hasError", "getBusById"]),

    btnTittle() {
      return this.id ? "Змінити" : "Додати";
    },
  },
  created() {
    this.bus = { ...this.getBusById(this.id) };
  },
  methods: {
    ...mapActions("buses", ["updateBuses", "addBuses"]),
    onApdate(event) {
      event.preventDefault();

      if (this.id) {
        this.updateBuses({
          itemId: this.id,
          data: {
            number: this.bus.number,
            numberOfSeats: this.bus.numberOfSeats,
          },
        });
      } else {
        this.addBuses({ ...this.bus });
      }
      this.resetForm();
      this.$router.push({
        name: "buses",
      });
    },
    resetForm() {
      // Скидання форми до початкового стану
      this.bus = {};
    },
    onCancel(event) {
      event.preventDefault();
      this.resetForm();
      this.$router.push({
        name: "buses",
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