<script setup lang="ts">
  import { BeButton } from "./components";
  import { AlarmPlus } from "lucide-vue-next";
</script>

<template>
  <div>componentes</div>
  <be-button
    variant="primary light"
    size="sm"
    outline
    rounded="md"
    disabled
    iconSize="lg"
    expanded
    :iconLeft="AlarmPlus"
  >
    Primary
  </be-button>
</template>

<style scoped></style>
