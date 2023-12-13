<template>
  <h3>
    <slot name="tittle_block"> Title</slot>
  </h3>
  <div class="block__items">
    <div class="header-container">
      <div class="header">
        <slot name="headerOne">Title</slot>
      </div>
      <div class="header">
        <slot name="headerTwo">Title</slot>
      </div>
    </div>

    <div v-for="item in itemList" :key="item.id" class="field">
      <div class="item_number">
        <slot name="name" :item="item"></slot>
      </div>
      <div class="item_numberSeats">
        <div class="numberSeats-value">
          <slot name="number" :item="item"></slot>
        </div>
        <!-- edit -->
        <v-col v-if="isVisibleBtn" cols="auto">
          <v-btn
            density="compact"
            icon="mdi-plus"
            class="edit-class"
            @click="onEdit(item)"
          >
            <font-awesome-icon :icon="['fas', 'user-pen']" />
          </v-btn>
        </v-col>
        <!-- delete -->
        <v-col cols="auto">
          <v-btn
            density="compact"
            icon="mdi-plus"
            class="delete-class"
            @click="deleteItemes(item.id)"
          >
            <font-awesome-icon :icon="['fas', 'user-xmark']" />
          </v-btn>
        </v-col>
      </div>
    </div>
    <div v-if="isVisibleBtn" class="block-btnAdd">
      <v-btn class="btnAdd" @click="addItem"> Додати </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditableItemList",
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    isVisibleBtn: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["edit-click", "delete-click", "add-click"],
  methods: {
    onEdit(item) {
      this.$emit("edit-click", item);
    },
    deleteItemes(itemId) {
      console.log("itemId");
      console.log(itemId);
      this.$emit("delete-click", itemId);
    },
    addItem() {
      this.$emit("add-click");
    },
  },
};
</script>

<style lang="scss" scoped>
.block__items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.header-container {
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.header,
.item_number,
.item_numberSeats {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.edit-class:hover {
  background-color: rgb(241, 189, 93);
  color: white;
}
.delete-class:hover {
  background-color: red;
  color: white;
}
.field {
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.item_numberSeats {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btnAdd:hover {
  background-color: greenyellow;
}
</style>