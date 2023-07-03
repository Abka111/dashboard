<template>
  <div class="sidebarr">
    <div class="heading">Menu</div>
    <div class="menu_container">
        <sidebar_button :icon_fill="fill" :icon_stroke="stroke" :active="$route.name == 'bill'" :name="`bill`"/>
        <sidebar_button :icon_fill="file_fill" :icon_stroke="file_stroke" :active="$route.name == 'file'" :name="`file`"/>
    </div>
  </div>
</template>
<script setup>
import stroke from '../assets/stroke.svg';
import fill from '../assets/fill.svg';
import file_stroke from '../assets/file_stroke.svg';
import file_fill from '../assets/file_fill.svg';
import sidebar_button from "./sidebar_button.vue";

</script>

<style scoped>
.sidebarr{
    width: 100%;
    height: calc(100vh - 80px); 
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
   align-items:center;
   

}
.heading{
    min-width: 40%;
    text-align: center;
    margin-bottom: 50px;
}
.menu_container{
    width: 40%;
    height: 20px;
}
</style>