<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Test />
    <h1>This is a test page</h1>
    <b>This is a view</b>
  </div>
</template>

<script>
import Test from "@/components/Test.vue";

export default {
  name: "TestView",
  components: {
    Test,
  },
};
</script>
