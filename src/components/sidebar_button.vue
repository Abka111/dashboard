<template>
    <div v-on:click.prevent="$router.push(`/${props.name}`)" :class="props.active ? `active` :`regular`">
        <img class="stroke" v-bind:src="props.icon_stroke" alt="">
        <img class="fill" v-bind:src="props.icon_fill" alt="">
    </div>
</template>
<script setup>
const props = defineProps(['icon_stroke' ,"icon_fill" , "active" , "name"])

</script>
<style >
img{
    width: 60%;
}
.active{
    width: 50px;
    margin: 0 auto;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center ;
    margin-bottom: 30px;
}
.active > .stroke{
    display:none;

}
.regular > .fill{
    display:none;

}
.regular{
    width: 50px;
    margin: 0 auto;
    height: 50px;
    /* background-color: white; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center ;
    margin-bottom: 30px;

}

</style>