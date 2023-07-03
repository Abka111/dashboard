<template>
  <div class="dashboard">
    <div class="header"><headerr /></div>
    <div class="sidebar-main">
      <div class="sidebar"><sidebar /></div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import headerr from "../components/headerr.vue";
import sidebar from "../components/sidebar.vue";
export default {
  components: {
    sidebar , headerr
  },
};

</script>
<style scoped>
.sidebar-main{
  display: flex;
  background-color: #cdcdcd;
  height: 100%;
justify-content: space-between;
}
.sidebar{
  width:15%;
}
.main{
  background: white;
  width: 85%;
  border-top-left-radius: 50px;
}
</style>