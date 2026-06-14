import { Box, Text } from '@radix-ui/themes';
import type { PageBlocksText } from '../../tina/__generated__/types';
import { useContext } from 'react';
import { LanguageContext } from '../../utils/context/language';
import { tinaField } from 'tinacms/dist/react';
import { findIntlValue } from '../../tina/templating/special-fields';
import { colorMap } from '../../tina/templating/granular-fields';
import { LinkWrapper } from '../helpers';
import config from '../../utils/config';
import type { ExtraProps } from '../types';

export default function Component(
  props: PageBlocksText & { extraProps?: ExtraProps },
) {
  const language = useContext(LanguageContext);
  const text = findIntlValue(language, 'text');
  const selectedColor = props.settings?.color || 'gray';
  const colorValue = colorMap[selectedColor as keyof typeof colorMap] || 'var(--gray-10)';

  const content = (
    <Text
      data-tina-field={
        props.extraProps?.tinaFieldDisabled ? undefined : tinaField(props)
      }
      size={config.layout.textSize}
      style={{ 
        whiteSpace: 'pre-line',
        color: colorValue,
        fontStyle: props.settings?.textStyle === "italic" ? 'italic' : "normal",
        fontWeight: props.settings?.textStyle === "bold" ? 'bold' : "normal",
      }}
    >
      {props[text] ? props[text] : 'Add your text here'}
    </Text>
  );

  return (
    <Box mt={props.settings?.mt ?? '0'} mb={props.settings?.mb ?? '0'}>
      <LinkWrapper underlined link={props.link ?? ''} content={content} />
    </Box>
  );
}
