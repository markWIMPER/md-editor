import { formatText } from "../basic/convert";
import { TextNodeType } from "./IHeadingConvert";

/**
 * @desc 匹配文本行中的语法块
 * @param textRow 文本行
 * @returns
 */
export function extractHeadingBlock(textRow: string) {
  return (
    textRow.match(/^#\s/) ||
    textRow.match(/^##\s/) ||
    textRow.match(/^###\s/) ||
    textRow.match(/^####\s/) ||
    textRow.match(/^#####\s/)
  );
}

/**
 * Input -> Display
 * 根据 [表示符号] 转化为对应 [DOM结构]
 * 1. 使用正则表达式，将文本以行文本分离出来
 * 2. 提取出 [表示符号] 和 [文本内容]
 * 3. 根据表示符号，生成对应的 DOM 结构
 */
export function convertHeadings(nodeType: string, text: string) {
  // 根据文本类型的长度，拆分文本
  switch (nodeType) {
    case TextNodeType.H1:
      return `<h1>${formatText(text.substring(2))}</h1>`;
    case TextNodeType.H2:
      return `<h2>${formatText(text.substring(2))}</h2>`;
    case TextNodeType.H3:
      return `<h3>${formatText(text.substring(2))}</h3>`;
    case TextNodeType.H4:
      return `<h4>${formatText(text.substring(2))}</h4>`;
    case TextNodeType.H5:
      return `<h5>${formatText(text.substring(2))}</h5>`;
  }
}
