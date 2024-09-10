import { TextDescription } from "@/app/schemas/common";
const s = "every good boy eats chips";
const textToParagraphs = ({ text, charWidth }: TextDescription) => {
  const words = text.split(" ");
  const paragraphTexts: string[] = [];

  let currentParagraph: string[] = [];
  for (let i = 0; i < words.length; i++) {
    currentParagraph.push(words[i]);
    if (currentParagraph.join(" ").length > charWidth) {
      const last = currentParagraph.pop();
      paragraphTexts.push(currentParagraph.join(" "));
      if (last) {
        currentParagraph = [last];
      }
    }
  }
  if (currentParagraph.join(" ").length) {
    paragraphTexts.push(currentParagraph.join(" "));
  }
  return paragraphTexts;
};

export function P({ text, charWidth }: TextDescription) {
  const paragraphs = textToParagraphs({ text, charWidth });
  return (
    <>
      {paragraphs.map((p) => (
        <p className="text-lg opacity-50">{p}</p>
      ))}
    </>
  );
}
