import { ComponentsDesignTokens } from '@primeuix/themes/types';

export const dialog: ComponentsDesignTokens['dialog'] = {
  css: () => `
    .p-dialog-header {
      padding: 8px 24px;
    }

    .p-dialog-header-actions .p-button {
      width: 28px;
      height: 28px;
    }

    .p-dialog-header-actions .p-button:hover {
      border: 1px solid red;
      background: transparent !important;
      border: transparent !important;
    }
  `,
};