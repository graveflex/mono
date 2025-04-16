import type { SerializedBlockNode } from '@payloadcms/richtext-lexical';

const ContentGridConverter = ({ node }: { node: SerializedBlockNode }) => {
  // TODO: Add converter markup
  return <div>{node?.fields?.blockName}</div>;
};

export default ContentGridConverter;
