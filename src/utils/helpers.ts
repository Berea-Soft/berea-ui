export const processVariant = (variant: string) => {
    if (variant.includes(' ')) {
      return variant.replace(' ', '-');
    }
    return variant;
  };