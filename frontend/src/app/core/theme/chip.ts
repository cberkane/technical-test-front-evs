import { ComponentsDesignTokens } from '@primeuix/themes/types';
import { error, errorLight, info, infoLight, primary, primaryLight, success, successLight } from './_variables';


export const chip: ComponentsDesignTokens['chip'] = {
    css: () => `
        .p-chip {
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 12px;
            font-weight: bold;
            background: ${primaryLight};
            color: ${primary};
        }

        .p-chip[data-status="primary"] {
            background: ${primaryLight};
            color: ${primary};
        }

        .p-chip[data-status="success"] {
            background: ${successLight};
            color: ${success};
        }

        .p-chip[data-status="error"] {
            background: ${errorLight};
            color: ${error};
        }

        .p-chip[data-status="info"] {
            background: ${infoLight};
            color: ${info};
        }
    `
};