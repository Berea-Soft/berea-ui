<script setup lang="ts">
  import { BeSwitch } from "./components";
  import { Sun, Moon } from "lucide-vue-next";
</script>

<template>
  <div>componentes</div>
  <be-switch :uncheckedIcon="Sun" :checkedIcon="Moon" variant="success" :checked="false" />
  <!-- <be-button
  class="max-w-md"
    variant="primary light"
    size="sm"
    outline
    rounded="md"
    between
    iconSize="lg"
    expanded
    :iconRight="AlarmPlus"
  >
    Primary
  </be-button> -->
</template>

<style scoped></style>
