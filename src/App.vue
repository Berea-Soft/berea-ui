<script setup lang="ts">
  import { BeSwitch, BeDivider, BeButton } from "./components";
  import { Sun, Moon, AlarmPlus } from "lucide-vue-next";
</script>

<template>
  <div class="container flex flex-col items-center justify-center w-full gap-10">
    <div>componentes</div>
    <be-switch :uncheckedIcon="Sun" :checkedIcon="Moon" variant="success" />
    <be-button
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
    </be-button>
    <div class="container flex flex-col items-center justify-center w-full gap-4">
      <p>Contenido arriba</p>
      <BeDivider>Centered Text</BeDivider>
      <p>Contenido abajo</p>
      
      <p>Divider Solo</p>
      <BeDivider />
  
      <BeDivider orientation="left" orientationMargin="50">
        Left Text
      </BeDivider>
  
      <BeDivider orientation="right" dashed>
        Right Text
      </BeDivider>
  
      <BeDivider type="vertical" />
    </div>
  </div>
</template>

<style scoped></style>
