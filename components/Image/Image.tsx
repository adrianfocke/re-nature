import { AspectRatio, Flex, Box, Card } from '@radix-ui/themes';
import NextImage from 'next/image';
import { aspectRatioMap } from '../../tina/templating/granular-fields';
import { tinaField } from 'tinacms/dist/react';
import type { PageBlocksImage } from '../../tina/__generated__/types';
import useBreakpoint from '../../utils/hook/useBreakpoint';
import { renderBlocks } from '../../tina/templating/utils';
import { findBreakpointValue } from '../../tina/templating/special-fields';
import { LinkWrapper } from '../helpers';
import config from '../../utils/config';

export default function Component(props: PageBlocksImage) {
  const breakpoint = useBreakpoint();
  const aspectRatio = findBreakpointValue(breakpoint, 'aspectRatio');

  const content = (
    <AspectRatio
      data-tina-field={tinaField(props.content ?? props)}
      ratio={aspectRatioMap[props.settings?.[aspectRatio]] ?? 16 / 9}
      style={{ border: "1px solid var(--gray-12)", overflow: 'hidden', borderRadius: config.layout.radiusVar, }}
    
    >
      <NextImage
        src={
          props.content?.image !== undefined &&
            props.content?.image !== null &&
            props.content?.image !== ''
            ? props.content.image
            : '/uploads/placeholders/gradient.jpg'
        }
        blurDataURL={props.content?.blurImage ?? undefined}
        placeholder={props.content?.blurImage ? 'blur' : 'empty'}
        fill
        alt={'Image content'}
        role={'presentation'}
        style={{maxWidth: "100%", objectFit: "cover", boxShadow: config.layout.boxShadow }}
      />
      <Flex
        direction={'column'}
        justify={'start'}
      >
        {props.content?.blocks ? <Box pl={config.layout.padding} p={config.layout.padding} maxWidth={{ initial: '100%', md: '400px' }} width={"max-content"}>
          {props.content?.blocks.length > 1 ? <Card style={{ boxShadow: config.layout.boxShadow }}>
            {props.content?.blocks?.map((block, j) => {
              return renderBlocks(block, j);
            })}
          </Card> : props.content?.blocks?.map((block, j) => {
            return renderBlocks(block, j);
          })}

        </Box> : ""}

      </Flex>
    </AspectRatio>
  );

  return (
    <Box
      mt={props.settings?.mt ?? '0'}
      mb={props.settings?.mb ?? config.layout.padding}
    >
      <LinkWrapper link={props.content?.link ?? ''} content={content} />
    </Box>
  );
}
