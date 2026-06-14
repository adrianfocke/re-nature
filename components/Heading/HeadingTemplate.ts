import type { Template } from "tinacms";
import {
  createIntlField,
  createResponsiveField,
} from "../../tina/templating/special-fields";
import {
  TextSizeField,
  MarginTopField,
  MarginBottomField,
  ColorField,
  TextStyleField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Heading",
  label: "Heading",
  fields: [
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [
        MarginTopField,
        MarginBottomField,
        ColorField,
        ...createResponsiveField(TextSizeField),
        TextStyleField,
      ],
    },
    ...createIntlField({
      name: "text",
      label: "Text",
      type: "string",
      ui: { component: "textarea" },
    }),
  ],
} as Template;
