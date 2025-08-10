import { definePreset } from '@primeuix/themes';
import Aura from '@primeng/themes/aura';

import { button } from './button';
import { datepicker } from './datePicker';
import { dialog } from './dialog';
import { floatlabel } from './floatlabel';
import { inputtext } from './inputtext';
import { select } from './select';

export const CustomTheme = definePreset(Aura, {
  components: {
    button,
    datepicker,
    dialog,
    floatlabel,
    inputtext,
    select,
  },
});
