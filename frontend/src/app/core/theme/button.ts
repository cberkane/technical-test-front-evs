import { ComponentsDesignTokens } from '@primeuix/themes/types';
import { primary } from './_variables';

export const button: ComponentsDesignTokens['button'] = {
  css: () => `
    .p-button {
      padding: 6px 12px;
      background: ${primary};
      border: 1px solid ${primary};
      font-size: 14px;
      font-weight: bold;
    }

    .p-button:hover {
      background: ${primary} !important;
      border: 1px solid ${primary} !important;
    }

    .p-button-outlined {
      background: transparent;
      border: 1px solid ${primary};
      color: ${primary};
    }

    .p-button-outlined:hover {
      background: transparent !important;
      border: 1px solid ${primary} !important;
      color: ${primary} !important;
    }
 `,
};
