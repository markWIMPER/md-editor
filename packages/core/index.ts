import { classifyTextBySyntax, splitTextByLines } from "./basic/convert";

/**
 * @desc 将 md文本转为 HTML 模板
 * @param inputStr markdown 文本
 * @returns 可渲染的HTML模板
 */
export function renderMarkdown(inputStr: string) {
  let rows = splitTextByLines(inputStr);
  let renderHTMLTemplate = ``;

  // debugger;

  for (let i = 0, len = rows.length; i < len; i++) {
    renderHTMLTemplate += classifyTextBySyntax(rows[i], renderHTMLTemplate);
  }

  console.log("renderHTMLTemplate: ", renderHTMLTemplate);

  return renderHTMLTemplate;
}
