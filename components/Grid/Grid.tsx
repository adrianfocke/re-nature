import { Box, Container, Grid } from '@radix-ui/themes';
import { tinaField, useEditState } from 'tinacms/dist/react';
import type { PageBlocksGrid } from '../../tina/__generated__/types';
import EditHelper from '../../tina/templating/EditHelper';
import { renderBlocks } from '../../tina/templating/utils';
import config from '../../utils/config';

export default function Component(props: PageBlocksGrid) {
  const { edit } = useEditState();

  return (
    <Box style={{backgroundColor: !!props.settings?.hasBackground ? 'var(--gray-2)' : 'transparent'}}>
    <Container
      mt={props.settings?.mt ?? '0'}
      mb={props.settings?.mb ?? '0'}
      px={{
        initial: config.layout.padding,
        md: '0',
      }}
    >
      {edit && <EditHelper {...props} />}
      <Grid columns={{ initial: config.layout.gridColumns.initial, md: config.layout.gridColumns.md }} gap={config.layout.gap}>
        {props.items?.map((item, index) => (
          <Box
            key={index}
            gridColumn={{ initial: 'span 1', md: `span ${item?.settings?.gridColumnSpan}` }}
            data-tina-field={tinaField(item)}
          >
            {item?.blocks?.map((block, index) => {
              return renderBlocks(block, index);
            })}
          </Box>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
