<script lang="ts" setup>
  import { ref, computed, watch, PropType, useAttrs } from "vue";
  import { cn } from "../../utils/utils";
  import { cva, type VariantProps } from "class-variance-authority";

  defineOptions({
    name: "BeSwitch",
  });

  type BaseVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "light";

  const props = defineProps({
    variant: {
      type: String as PropType<BaseVariant>,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    checkedText: {
      type: String,
      default: "",
    },
    uncheckedText: {
      type: String,
      default: "",
    },
    checkedIcon: {
      type: [String, Object],
      default: "",
    },
    uncheckedIcon: {
      type: [String, Object],
      default: "",
    },
  });

  const emit = defineEmits(["update:checked", "change"]);
  const attrs = useAttrs() as Record<string, any>;

  const internalChecked = ref(props.checked);
  const variantProps = ref<BaseVariant>(props.variant);
  const checkedTextProps = ref(props.checkedText);
  const uncheckedTextProps = ref(props.uncheckedText);
  const checkedIconProps = ref(props.checkedIcon);
  const uncheckedIconProps = ref(props.uncheckedIcon);
  const loadingProps = ref(props.loading);
  const disabledProps = ref(props.disabled);

  const switchClass = cva(
    "relative inline-flex items-center justify-center w-16 h-6 rounded-full transition-colors duration-300 focus:outline-none",
    {
      variants: {
        variant: {
          default: "bg-slate-500 text-white",
          primary: "bg-blue-500 text-white",
          success: "bg-green-500 text-white",
          warning: "bg-orange-400 text-white",
          danger: "bg-red-600 text-white",
          ghost: "hover:bg-slate-400",
        },
        isDisabled: {
          true: "cursor-not-allowed opacity-50 bg-slate-400",
        },
        isLoading: {
          true: "bg-slate-400",
        },
        isChecked: {
          false: "bg-gray-400",
        },
      },
      defaultVariants: {
        variant: "primary",
      },
    }
  );

  const labelClass = cva(
    "text-sm font-medium transition-opacity duration-300",
    {
      variants: {
        isChecked: {
          true: "opacity-100 mr-[1.9rem]",
          false: "opacity-100 ml-[1.9rem]",
        },
      },
    }
  );

  const switchClasses = computed(() => {
    const processedVariant = processVariant(variantProps.value as string);
    return cn(
      switchClass({
        variant: processedVariant as VariantProps<
          typeof switchClass
        >["variant"],
        isDisabled: isDisabled.value,
        isLoading: loadingProps.value,
        isChecked: internalChecked.value,
      })
    );
  });

  watch(
    () => props.checked,
    (newValue) => {
      internalChecked.value = newValue;
    }
  );

  const isDisabled = computed(() => disabledProps.value || loadingProps.value);

  const toggleClass = cva(
    "absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300",
    {
      variants: {
        isChecked: {
          true: "translate-x-9",
          false: "-translate-x-1",
        },
      },
    }
  );

  const toggleSwitch = () => {
    if (isDisabled.value) return;

    internalChecked.value = !internalChecked.value;
    emit("update:checked", internalChecked.value);
    emit("change", internalChecked.value);
  };

  watch(
    () => props.variant,
    (newValue) => {
      variantProps.value = newValue;
    }
  );
  watch(
    () => props.disabled,
    (newValue) => {
      disabledProps.value = newValue;
    }
  );
  watch(
    () => props.loading,
    (newValue) => {
      loadingProps.value = newValue;
    }
  );
  watch(
    () => props.checked,
    (newValue) => {
      internalChecked.value = newValue;
    }
  );
  watch(
    () => props.checkedText,
    (newValue) => {
      checkedTextProps.value = newValue;
    }
  );
  watch(
    () => props.uncheckedText,
    (newValue) => {
      uncheckedTextProps.value = newValue;
    }
  );
  watch(
    () => props.checkedIcon,
    (newValue) => {
      checkedIconProps.value = newValue;
    }
  );
  watch(
    () => props.uncheckedIcon,
    (newValue) => {
      uncheckedIconProps.value = newValue;
    }
  );
</script>

<template>
  <component
    is="button"
    role="switch"
    :aria-checked="internalChecked"
    :disabled="isDisabled"
    @click="toggleSwitch"
    v-bind="attrs"
    :class="switchClasses"
  >
    <span :class="toggleClass({ isChecked: internalChecked })"></span>

    <span v-if="internalChecked" :class="labelClass({ isChecked: true })">
      <template v-if="checkedIconProps">
        <component :is="checkedIconProps" class="w-5 h-5" />
      </template>
      <template v-else>
        {{ checkedTextProps }}
      </template>
    </span>

    <span v-else :class="labelClass({ isChecked: false })">
      <template v-if="uncheckedIconProps">
        <component :is="uncheckedIconProps" class="w-5 h-5" />
      </template>
      <template v-else>
        {{ uncheckedTextProps }}
      </template>
    </span>
  </component>
</template>
