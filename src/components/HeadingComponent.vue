<template>
  <header class="header-section">
    <h1>{{ headline }}</h1>
  </header>
</template>

<script>
export default {
  name: "HeadingComponent",
  //props = custom attributes (eigene Attribute) gleichbehandelt wie data properties
  props: ["headline"],
};
</script>

<style scoped>
.header-section {
  background-color: #f0f8ff;
  text-align: center;
  padding: 2rem 0 1.5rem 0;
  margin-bottom: 2rem;
}
</style>
