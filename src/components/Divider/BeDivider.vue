<template>
  <div :class="dividerClasses" role="separator">
    <span v-if="slots.default" :class="textClasses">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
  import { computed, PropType, useSlots } from "vue";
  import { cn } from "../../utils/utils"; // Ajusta la ruta según tu estructura
  import { processVariant } from "../../utils/helpers";
  import { cva, VariantProps } from "class-variance-authority";

  defineOptions({
    name: "BeDivider",
  });

  const slots = useSlots() as ReturnType<typeof useSlots>;

  type BaseVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "light";

  type BaseOrientation = "center" | "left" | "right";

  type BaseType = "horizontal" | "vertical";

  const props = defineProps({
    type: {
      type: String as PropType<BaseType>,
      default: "horizontal",
    },
    dashed: {
      type: Boolean,
      default: false,
    },
    orientation: {
      type: String as PropType<BaseOrientation>,
      default: "center",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    orientationMargin: {
      type: [String, Number],
      default: 100,
    },
    color: {
      type: String as PropType<BaseVariant>,
      default: "default",
    },
    class: {
      type: String,
      default: "",
    },
  });

  const typeProps = computed(() => props.type);
  const dashedProps = computed(() => props.dashed);
  const orientationProps = computed(() => props.orientation);
  const plainProps = computed(() => props.plain);
  const orientationMarginProps = computed(() => props.orientationMargin);
  const colorProps = computed(() => props.color);
  const classProps = computed(() => props.class);

  const divider = cva("whitespace-nowrap", {
    variants: {
      type: {
        horizontal:
          "flex items-center text-center box-border leading-6 border-block-start-custom my-4 px-4 text-slate-500",
        vertical: "h-full mx-4 border-l border-t-0",
      },
      isDashed: {
        true: "border-dashed",
        false: "",
      },
      orientation: {
        center:
          "before:content-[''] before:flex-1 before:border-t before:border-gray-300 before:mr-4 after:content-[''] after:flex-1 after:border-t after:border-gray-300 after:ml-4 w-full",
        left: "after:border after:border-solid after:border-inherit after:flex after:flex-1 after:flex-grow w-full after:content-[''] after:w-[95%] after:mr-4 before:border before:border-solid before:flex-grow before:border-inherit before:flex before:flex-1 after:grow-[10] before:content-[''] before:w-[5%] before:ml-4",
        right:
          "after:border after:border-solid after:border-inherit after:flex after:flex-1 after:flex-grow w-full after:content-[''] after:w-[5%] after:mr-4 before:border before:border-solid before:flex-grow before:border-inherit before:flex before:flex-1 before:grow-[10] before:content-[''] before:w-[95%] before:ml-4",
      },
      plain: {
        true: "font-normal",
        false: "",
      },
      orientationMargin: {
        100: "orientation-margin-100",
      },
      color: {
        default: "text-slate-500",
        primary: "text-blue-500",
        success: "text-green-500",
        warning: "text-orange-400",
        danger: "text-red-600",
        ghost: "hover:text-slate-400",
      },
    },
    defaultVariants: {
      type: "horizontal",
      isDashed: false,
      orientation: "center",
      plain: false,
      orientationMargin: 100,
      color: "default",
    },
  });

  const text = cva("text-base font-medium whitespace-nowrap text-center", {
    variants: {
      orientation: {
        center: "text-center px-4",
        left: "text-left px-4",
        right: "text-right px-4",
      },
      color: {
        default: "text-slate-500",
        primary: "text-blue-500",
        success: "text-green-500",
        warning: "text-orange-400",
        danger: "text-red-600",
        ghost: "hover:text-slate-400",
      },
    },
    defaultVariants: {
      orientation: "center",
      color: "default",
    },
  });

  const dividerClasses = computed(() => {
    if (!slots.default) {
      if (typeProps.value === "horizontal") return cn("w-full border-t border-gray-300 my-4", classProps.value);
    }
    const processedVariant = processVariant(colorProps.value);
    return cn(
      divider({
        type: typeProps.value as VariantProps<typeof divider>["type"],
        isDashed: dashedProps.value,
        orientation: orientationProps.value as VariantProps<
          typeof divider
        >["orientation"],
        plain: plainProps.value,
        orientationMargin: orientationMarginProps.value as VariantProps<
          typeof divider
        >["orientationMargin"],
        color: processedVariant as VariantProps<typeof divider>["color"],
      }),
      classProps.value as string
    );
  });

  const textClasses = computed(() => {
    return cn(
      text({
        orientation: orientationProps.value as VariantProps<
          typeof text
        >["orientation"],
        color: colorProps.value as VariantProps<typeof text>["color"],
      }),
      classProps.value as string
    );
  });
</script>
