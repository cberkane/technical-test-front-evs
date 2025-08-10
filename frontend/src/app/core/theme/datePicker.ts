import { ComponentsDesignTokens } from '@primeuix/themes/types';
import { primary } from './_variables';

export const datepicker: ComponentsDesignTokens['datepicker'] = {
  date: {
    selectedBackground: primary,
  },
  css: () => `
    .p-datepicker-increment-button,
    .p-datepicker-decrement-button {
      background: #fff !important;
      border: 1px solid transparent !important;
      color: #000;
    }

    .p-datepicker-increment-button:hover,
    .p-datepicker-decrement-button:hover {
      background: #fff !important;
      border: 1px solid transparent !important;
      color: #000 !important;
    }

    .p-datepicker-increment-button:active,
    .p-datepicker-decrement-button:active {
      background: transparent !important;
      border: 1px solid transparent !important;
      color: #000 !important;
    }
  `,
};