import { TextDescription } from "@/app/schemas/common";

export function H2({ text, charWidth }: TextDescription) {
  return <h2 className="mb-8 text-2xl font-semibold">{text}</h2>;
}
