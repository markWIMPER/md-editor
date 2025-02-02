import { formatText } from "../basic/convert";

export function convertText(text: string) {
  return `<p>${formatText(text)}</p>`;
}
