// 处理加粗文本
export function handleBold(text: String) {
  // 使用正则表达式匹配文本中的加粗部分
  let bold = text.match(/(\*\*.*?\*\*)/g);
  // 如果匹配到了加粗部分
  if (bold) {
    // 遍历匹配到的加粗部分
    bold.forEach((_boldNode) => {
      // 将加粗部分替换为带有<b>标签的文本
      text = text.replace(
        _boldNode,
        `<b>${_boldNode.substring(2, _boldNode.length - 2)}</b>`
      );
    });
  }
}
