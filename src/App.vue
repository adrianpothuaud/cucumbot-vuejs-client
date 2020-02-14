<template>
  <div>
    <TopHeader/>
    <router-view/>
  </div>
</template>

<script>
  import TopHeader from "@/components/TopHeader.vue";

  export default {
    name: "app",
    components : { TopHeader }
  };
</script>
