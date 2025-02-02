export function handleItalic(text: string) {
  let italic = text.match(/\*{2}[^*].*?\*{2}/g);
  if (italic) {
    italic.forEach((item) => {
      text = text.replace(item, `<i>${item.slice(2, -2)}</i>`);
    });
  }
}
