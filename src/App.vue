<template>
  <!--props headline als data property-->
  <HeadingComponent :headline="headline" />
  <!--ausführen-->
  <main><TodoComponent /></main>
</template>

<script>
//import HeadingComponent from "@/components/HeadingComponent";
// component use local - Importieren, registrieren, ausführen
import TodoComponent from "@/components/TodoComponent";

export default {
  name: "App",
  data() {
    return {
      // im parent component data property erstellen
      headline: "Todo App",
    };
  },
  components: {
    //registrieren
    TodoComponent,
  },
};
</script>
