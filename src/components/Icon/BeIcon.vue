<template>
  <component
    v-if="icon"
    :is="icon"
    :class="[iconClass]"
    v-bind="iconProps"
    aria-hidden="true"
  />
  <span v-else-if="$slots.default" :class="[iconClass]" aria-hidden="true">
    <slot />
  </span>
  <span v-else class="text-red-500">
    Error: No se proporcionó un icono o SVG.
  </span>
</template>

<script lang="ts" setup>
  import { computed } from "vue";

  defineOptions({
    name: "BeIcon",
  });

  // Props
  const props = defineProps({
    icon: {
      type: [String, Object],
      default: null,
      validator: (value: string | object) => {
        return typeof value === "string" || typeof value === "object";
      },
    },
    class: {
      type: String,
      default: "",
    },
    ariaLabel: {
      type: String,
      default: "",
    },
  });

  const iconClass = computed(() => props.class);
  const iconProps = computed(() => ({
    "aria-label": props.ariaLabel || undefined,
  }));
</script>
