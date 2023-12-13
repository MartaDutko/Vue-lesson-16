<template>
  <main-masterpage>
    <filter-page />
    <editable-item-list
      :itemList="getDriversList"
      @edit-click="onEdit"
      @delete-click="onDelete"
      @add-click="addDriver"
    >
      <template #tittle_block>Призначення</template>
      <template #headerOne>Водій</template>
      <template #headerTwo>Номер автобуса</template>
      <template #name="{ item }">
        {{ item.name }}
      </template>
      <template #number="{ item }">{{ item.exp }}</template>
    </editable-item-list>
    <p v-show="messegeError">{{ messegeError }}</p>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masteroages/MainMasterpage.vue";
import { mapGetters, mapActions } from "vuex";
import FilterPage from "@/components/FilterPage.vue";
import EditableItemList from "@/components/EditableItemList.vue";

export default {
  name: "DriversView",
  components: {
    MainMasterpage,
    FilterPage,
    EditableItemList,
  },
  data() {
    return {
      messegeError: null,
    };
  },
  computed: {
    ...mapGetters("drivers", ["getDriversList"]),
    ...mapGetters("appointment", ["getAppointmentByIdDriver"]),
  },
  methods: {
    ...mapActions("drivers", ["loadListDrivers", "deleteDriver"]),
    addDriver() {
      this.$router.push({
        name: "driverEditor",
      });
    },
    onEdit(driver) {
      this.$router.push({
        name: "driverEditor",
        params: { id: driver.id },
      });
    },
    onDelete(id) {
      if (!this.getAppointmentByIdDriver(id)) {
        this.deleteDriver(id);
      } else {
        this.messegeError = "Не можна видалити користувача";
      }
    },
  },
  created() {
    this.loadListDrivers();
  },
};
</script>
<style lang="scss" scoped>
</style>
