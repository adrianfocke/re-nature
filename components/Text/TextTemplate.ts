import type { Template } from "tinacms";
import {
  createIntlField,
} from "../../tina/templating/special-fields";
import {
  LinkField,
  MarginTopField,
  MarginBottomField,
  ColorField,
  TextStyleField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Text",
  label: "Text",
  fields: [
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [MarginTopField, MarginBottomField, ColorField, TextStyleField],
    },
    LinkField,
    ...createIntlField({
      name: "text",
      label: "Text",
      type: "string",
      ui: { component: "textarea" },
    }),
  ],
} as Template;
