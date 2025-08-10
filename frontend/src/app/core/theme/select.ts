import { ComponentsDesignTokens } from '@primeuix/themes/types';
import { primary, primaryLight, textPrimary } from './_variables';

export const select: ComponentsDesignTokens['select'] = {
  root: {
    focusBorderColor: primary,
  },
  option: {
    focusBackground: primaryLight,
    selectedBackground: primaryLight,
    selectedFocusBackground: primaryLight,
    selectedColor: textPrimary,
    selectedFocusColor: textPrimary,
  },
};
