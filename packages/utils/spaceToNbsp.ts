/**
 * @desc 将文本转中的空格替换为&nbsp;
 * @param str 字符串
 * @returns 格式化后的字符串
 */
export function spaceToNbsp(str: string) {
  return str.replace(/\s/g, "&nbsp;");
}
