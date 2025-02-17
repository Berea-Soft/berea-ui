<script lang="ts" setup>
  import { cn } from "../../utils/utils";
  import { cva } from "class-variance-authority";
  import { computed, ref, watch } from "vue";
  import BeIcon from "../Icon/BeIcon.vue"; // Importa el componente Icon

  defineOptions({
    name: "BeLoading",
    components: {
      BeIcon,
    },
  });

  // Props
  const props = defineProps({
    class: {
      type: String,
      default: "",
    },
  });

  // Clases de loading
  const classProps = ref(props.class);
  const loading = cva(
    "animate-spin animate-infinite animate-ease-linear m-0.5 size-5"
  );

  const loadingClasses = computed(() => {
    return cn(loading(), props.class);
  });

  watch(
    () => props.class,
    (newValue) => {
      classProps.value = newValue;
    }
  );
</script>

<template>
  <be-icon :class="classProps">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      :class="loadingClasses"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </be-icon>
</template>

<style lang="css" scoped></style>
