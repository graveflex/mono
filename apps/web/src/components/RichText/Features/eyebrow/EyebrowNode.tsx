import {
  type EditorConfig,
  type LexicalCommand,
  type LexicalNode,
  type SerializedTextNode,
  TextNode,
  createCommand
} from '@payloadcms/richtext-lexical/lexical';

export type SerializedEyebrowNode = SerializedTextNode;

export const INSERT_INLINE_EYEBROW_COMMAND: LexicalCommand<undefined> =
  createCommand('INSERT_INLINE_EYEBROW_COMMAND');

export class EyebrowNode extends TextNode {
  static getType(): string {
    return 'eyebrow';
  }

  static clone(node: EyebrowNode): EyebrowNode {
    return new EyebrowNode(node.__text, node.__key);
  }

  createDOM(_: EditorConfig): HTMLElement {
    const element = document.createElement('p');
    element.classList.add('eyebrow');
    element.style.opacity = '0.8';
    element.style.fontSize = '0.875rem';
    element.textContent = this.getTextContent();
    return element;
  }

  updateDOM(_: EyebrowNode, dom: HTMLElement): boolean {
    if (dom.textContent !== this.getTextContent()) {
      dom.textContent = this.getTextContent();
    }
    return false;
  }

  static isInline() {
    return false;
  }

  canSplit(): boolean {
    return true;
  }

  static importJSON(serializedNode: SerializedEyebrowNode): EyebrowNode {
    const node = $createEyebrowNode(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setStyle(serializedNode.style);
    node.setTextContent(serializedNode.text);
    return node;
  }

  exportJSON(): SerializedEyebrowNode {
    return {
      ...super.exportJSON(),
      type: 'eyebrow',
      version: 1
    };
  }
}

export function $createEyebrowNode(text: string = ''): EyebrowNode {
  return new EyebrowNode(text);
}

export function $isEyebrowNode(
  node: LexicalNode | null | undefined
): node is EyebrowNode {
  return node instanceof EyebrowNode;
}
