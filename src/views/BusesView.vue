<template>
  <main-masterpage>
    <editable-item-list
      :itemList="getBusesList"
      @edit-click="onEdit"
      @delete-click="onDelete"
      @add-click="addBus"
    >
      <template #tittle_block>Наші автобуси:</template>
      <template #headerOne>Номер</template>
      <template #headerTwo>Автобуси</template>
      <template #name="{ item }">{{ item.number }}</template>
      <template #number="{ item }">{{ item.numberOfSeats }}</template>
    </editable-item-list>
    <p v-show="messegeError">{{ messegeError }}</p>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masteroages/MainMasterpage.vue";
import EditableItemList from "@/components/EditableItemList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BusesView",
  components: {
    MainMasterpage,
    EditableItemList,
  },
  data() {
    return {
      messegeError: null,
    };
  },
  computed: {
    ...mapGetters("buses", ["getBusesList"]),
    ...mapGetters("appointment", ["getAppointmentByIdBus"]),
  },

  methods: {
    ...mapActions("buses", ["loadlistBuses", "deleteBuses"]),
    onEdit(bus) {
      this.$router.push({
        name: "busesEditor",
        params: { id: bus.id },
      });
    },
    addBus() {
      this.$router.push({
        name: "busesEditor",
      });
    },
    onDelete(id) {
      if (!this.getAppointmentByIdBus(id)) {
        this.deleteBuses(id)
      }
      else {
        this.messegeError = "Не можна видалити автобус";
      }
    },
  },

  created() {
    this.loadlistBuses();
  },
};
</script>
<style lang="scss" scoped>
</style>