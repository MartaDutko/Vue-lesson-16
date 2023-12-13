<template>
  <main-masterpage>
    <h3>Вітаємо на сторінці нашого автопарку</h3>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masteroages/MainMasterpage.vue";
export default {
  name: "HomeView",
  components: { MainMasterpage },
};
</script>
<style lang="scss" scoped>
.custom-button {
  background-color: #6bdca9;
}
</style>