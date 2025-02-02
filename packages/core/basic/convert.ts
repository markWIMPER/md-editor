import { handleBold, handleItalic, spaceToNbsp } from "@md-editor/utils";
import { convertHeadings, extractHeadingBlock } from "../header";
import { convertText } from "../text";

/**
 * 将文本按行拆分，并返回一个数组
 */
export function splitTextByLines(textStr: string) {
  // 按行拆分
  return textStr.split("\n");
}

/**
 * 根据文本是否被支持的语法所匹配，分类成为不同的数组
 */
export function classifyTextBySyntax(textRow: string, template: string) {
  const matchArr = extractHeadingBlock(textRow);
  // 是否匹配 [标题 Heading]
  if (matchArr) {
    template += convertHeadings(matchArr[0], textRow);
  } else {
    // 默认文本用 p 标签包裹处理
    template += convertText(textRow);
  }

  return template;
}

/**
 * @desc 将文本转为 HTML 中展示的文本，这里考虑到部分嵌套格式需要支持
 * @param text 文本块
 * @returns 不携带任何标识的字符串
 */
export function formatText(text: string) {
  // 1. 空格转换
  spaceToNbsp(text);
  // 2. 加粗转换
  handleBold(text);
  // 3. 斜体转换
  handleItalic(text);
  // 4. 行内代码转换

  return text;
}
