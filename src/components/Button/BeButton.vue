<script lang="ts" setup>
  import { computed, ref, useAttrs, PropType, watch } from "vue";
  import { cva, type VariantProps } from "class-variance-authority";
  import { cn } from "../../utils/utils";
  import { config } from "../../utils/config";
  import { processVariant } from "../../utils/helpers";
  import BeLoading from "../Loading/BeLoading.vue";

  defineOptions({
    name: "BeButton",
  });

  type BaseVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "light";

  type CombinedVariant =
    | BaseVariant
    | "primary-light"
    | "primary light"
    | "success-light"
    | "success light"
    | "warning-light"
    | "warning light"
    | "danger-light"
    | "danger light"
    | "ghost-light"
    | "ghost light";

  const props = defineProps({
    variant: {
      type: String as PropType<CombinedVariant>,
      default: "default",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String as () => VariantProps<typeof button>["rounded"],
      default: "md",
    },
    size: {
      type: String as () => VariantProps<typeof button>["size"],
      default: "md",
    },
    tag: {
      type: String,
      default: "button",
      validator: (value) => {
        return config.defaultTags.indexOf(value as string) >= 0;
      },
    },
    nativeType: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "submit", "reset"].indexOf(value as string) >= 0;
      },
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: "",
    },
    iconLeft: {
      type: Object,
      default: null,
    },
    iconRight: {
      type: Object,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconLeftClass: {
      type: String,
      default: "",
    },
    iconRightClass: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String as () => VariantProps<typeof icon>["size"],
      default: "md",
    },
  });

  const emit = defineEmits(["click"]);
  const attrs = useAttrs();
  const variantProps = ref(props.variant);
  const outlineProps = ref(props.outline);
  const roundedProps = ref(props.rounded);
  const sizeProps = ref(props.size);
  const classProps = ref(props.class);
  const iconLeftProps = ref(props.iconLeft);
  const iconRightProps = ref(props.iconRight);
  const isLoading = ref(props.loading);
  const tagProps = ref(props.tag);
  const nativeTypeProps = ref(props.nativeType);
  const iconLeftClassProps = ref(props.iconLeftClass);
  const iconRightClassProps = ref(props.iconRightClass);
  const iconSizeProps = ref(props.iconSize);
  const expandedProps = ref(props.expanded);

  watch(
    () => props.variant,
    (value) => (variantProps.value = value)
  );
  watch(
    () => props.outline,
    (value) => (outlineProps.value = value)
  );
  watch(
    () => props.rounded,
    (value) => (roundedProps.value = value)
  );
  watch(
    () => props.size,
    (value) => (sizeProps.value = value)
  );
  watch(
    () => props.class,
    (value) => (classProps.value = value)
  );
  watch(
    () => props.iconLeft,
    (value) => (iconLeftProps.value = value)
  );
  watch(
    () => props.iconRight,
    (value) => (iconRightProps.value = value)
  );
  watch(
    () => props.loading,
    (value) => (isLoading.value = value)
  );
  watch(
    () => props.tag,
    (value) => (tagProps.value = value)
  );
  watch(
    () => props.nativeType,
    (value) => (nativeTypeProps.value = value)
  );
  watch(
    () => props.iconLeftClass,
    (value) => (iconLeftClassProps.value = value)
  );
  watch(
    () => props.iconRightClass,
    (value) => (iconRightClassProps.value = value)
  );
  watch(
    () => props.iconSize,
    (value) => (iconSizeProps.value = value)
  );

  watch(
    () => props.expanded,
    (value) => (expandedProps.value = value)
  );

  const button = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2",
    {
      variants: {
        variant: {
          default: "bg-slate-500 text-white font-bold hover:bg-slate-500/90",
          primary: "bg-blue-500 text-white font-bold hover:bg-blue-500/90",
          success: "bg-green-500 text-white hover:bg-green-500/80",
          warning: "bg-orange-400 text-white hover:bg-orange-400/80",
          danger: "bg-red-600 text-white hover:bg-red-600/80",
          ghost: "hover:bg-slate-400 hover:text-white",
          light:
            "bg-slate-200 border-transparent text-slate-500 hover:bg-slate-300",
          "primary-light":
            "bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
          "success-light":
            "bg-white border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
          "warning-light":
            "bg-white border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white",
          "danger-light":
            "bg-white border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
          "ghost-light":
            "bg-white border-transparent text-slate-500 hover:bg-slate-400",
        },
        outline: {
          true: "border border-input bg-transparent text-slate-600 hover:bg-slate-400 hover:text-white",
        },
        expanded: {
          true: "w-full",
        },
        rounded: {
          basic: "rounded-none",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-2xl",
          full: "rounded-full",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 px-3 text-sm",
          md: "h-10 px-8 text-lg",
          lg: "h-11 px-12 text-lg",
          xl: "h-12 px-14 text-xl",
          full: "h-12 px-16 text-2xl",
        },
      },
      compoundVariants: [
        {
          variant: "primary",
          outline: true,
          class: "border-blue-500 hover:bg-blue-500",
        },
        {
          variant: "success",
          outline: true,
          class: "border-green-500 hover:bg-green-500",
        },
        {
          variant: "warning",
          outline: true,
          class: "border-orange-400 hover:bg-orange-400",
        },
        {
          variant: "danger",
          outline: true,
          class: "border-red-600 hover:bg-red-600",
        },
        {
          variant: "ghost",
          outline: true,
          class: "border-transparent hover:bg-slate-400",
        },
        {
          variant: "light",
          outline: true,
          class: "border-transparent hover:bg-slate-200",
        },
        {
          variant: "primary-light",
          class:
            "bg-blue-200 border-blue-500 text-blue-500 hover:bg-blue-300 hover:text-blue-600",
        },
        {
          variant: "success-light",
          class:
            "bg-green-200 border-green-500 text-green-500 hover:bg-green-300 hover:text-green-600",
        },
        {
          variant: "warning-light",
          class:
            "bg-orange-200 border-orange-400 text-orange-400 hover:bg-orange-300 hover:text-orange-600",
        },
        {
          variant: "danger-light",
          class:
            "bg-red-200 border-red-600 text-red-600 hover:bg-red-300 hover:text-red-800",
        },
        {
          variant: "ghost-light",
          class:
            "bg-slate-200 border-transparent text-slate-500 hover:bg-slate-300",
        },
      ],
      defaultVariants: {
        variant: "default",
        size: "md",
        rounded: "md",
      },
    }
  );
  const icon = cva("", {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
        xxl: "w-10 h-10",
        xxxl: "w-12 h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  });
  const iconLeftClasses = computed(() => {
    return cn(
      icon({
        size: iconSizeProps.value,
      }) as string,
      iconLeftClassProps.value as string
    );
  });

  const iconRightClasses = computed(() => {
    return cn(
      icon({
        size: iconSizeProps.value,
      }) as string,
      iconRightClassProps.value as string
    );
  });

  const buttonClasses = computed(() => {
    const processedVariant = processVariant(variantProps.value as string);

    return cn(
      button({
        variant: processedVariant as VariantProps<typeof button>["variant"],
        outline: outlineProps.value,
        rounded: roundedProps.value,
        size: sizeProps.value,
        expanded: expandedProps.value,
      }) as string,
      classProps.value as string
    );
  });

  const handleClick = (event: MouseEvent) => {
    if (!isLoading.value) {
      isLoading.value = true;
      emit("click", event);
      setTimeout(() => (isLoading.value = false), 1000); // Simulación del fin del estado de carga
    }
  };
  const computedTag = computed(() => {
    if (attrs.disabled !== undefined && attrs.disabled !== false) {
      return "button";
    }
    return tagProps.value;
  });
</script>
<template>
  <component
    :is="computedTag"
    :class="buttonClasses"
    :disabled="loading"
    v-bind="attrs"
    :type="
      ['button', 'input'].includes(computedTag) ? nativeTypeProps : undefined
    "
    @click="handleClick"
  >
    <component
      v-if="iconLeftProps && !iconRightProps && !isLoading"
      :is="iconLeftProps"
      :class="iconLeftClasses"
    />
    <slot></slot>
    <component
      v-if="!iconLeftProps && iconRightProps && !isLoading"
      :is="iconRightProps"
      :class="iconRightClasses"
    />
    <be-loading v-if="isLoading" />
  </component>
</template>
<style lang="scss" scoped></style>
