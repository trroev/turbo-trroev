import type {FC} from 'react';

const BlockRenderer: FC = () => {
  return <></>
}

// export type Blocks = Page['blocks']

// export const BlockRenderer: FC<{
//   blocks: Blocks
// }> = ({ blocks }) => {
//   return blocks?.map(data =>
//     match(data)
//       .returnType<ReactNode>()
//       .with({ blockType: 'Banner' }, props => (
//         <Banner key={props.id} {...replaceNullsWithUndefined(props)} />
//       ))
//       .with({ blockType: 'Accordion' }, props => (
//         <Accordion key={props.id} {...replaceNullsWithUndefined(props)} />
//       ))
//       .with({ blockType: 'Text Section Break' }, props => (
//         <TextSectionBreak
//           key={props.id}
//           {...replaceNullsWithUndefined(props)}
//         />
//       ))
//       .exhaustive(),
//   )
// }

export { BlockRenderer }
