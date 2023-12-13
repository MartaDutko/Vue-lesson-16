<template>
  <main-masterpage>
    <editable-item-list
      :itemList="getFillAppointmentList"
      :isVisibleBtn="false"
      @delete-click="deleteApointment"
      @add-click="onAdd"
    >
      <template #tittle_block>Призначення</template>
      <template #headerOne>Водій</template>
      <template #headerTwo>Номер автобуса</template>
      <template #name="{ item }">{{ item.driver }}</template>
      <template #number="{ item }">{{ item.bus }}</template>
    </editable-item-list>
    <!-- block select -->
    <div class="block_select">
      <h3>Нове призначення</h3>
      <div class="block_driver styleSelect">
        <label class="styleLabel">Водій</label>
        <v-select
          v-model="appointment.driver"
          :items="getDriversList"
          label="Виберіть водія"
          item-title="name"
          item-value="id"
          variant="underlined"
          clearable
        >
          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :value="item.raw.id"
            ></v-list-item> </template
        ></v-select>
      </div>

      <div class="block_bus styleSelect">
        <label class="styleLabel">Автобус</label>
        <v-select
          v-model="appointment.bus"
          :items="getBusesList"
          item-title="number"
          label="Виберіть автобус"
          item-value="id"
          variant="underlined"
          clearable
        >
          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :value="item.raw.id"
              :subtitle="item.raw.experience"
            ></v-list-item>
          </template>
        </v-select>
      </div>
      <v-btn @click="onAdd"> Додати </v-btn>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masteroages/MainMasterpage.vue";
import EditableItemList from "@/components/EditableItemList.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppointmentView",
  components: {
    MainMasterpage,
    EditableItemList,
  },
  data() {
    return {
      appointment: {},
    };
  },
  computed: {
    ...mapGetters("appointment", [
      "getAppointmentList",
      "getFillAppointmentList",
    ]),
    ...mapGetters("drivers", ["getDriversList"]),
    ...mapGetters("buses", ["getBusesList"]),
  },
  methods: {
    ...mapActions("appointment", [
      "loadlistAppointment",
      "addAppointment",
      "deleteApointment",
    ]),
    ...mapActions("drivers", ["loadListDrivers"]),
    ...mapActions("buses", ["loadlistBuses"]),
    onAdd() {
      this.addAppointment(this.appointment);
      this.appointment = {};
    },
  },
  created() {
    this.loadlistAppointment();
    this.loadListDrivers();
    this.loadlistBuses();
  },
};
</script>
<style lang="scss" scoped>
.block_select {
  padding: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .styleSelect {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 30px;
    .styleLabel {
      width: 17%;
    }
  }
}
</style>
