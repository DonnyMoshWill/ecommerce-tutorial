import { TextDescription } from "@/app/schemas/common";
import { H2 } from "./CenteredText/H2";
import { P } from "./CenteredText/P";

const typeMap: {
  [key: string]: ({ text, charWidth }: TextDescription) => JSX.Element;
} = {
  h2: H2,
  p: P,
};

export function CenteredText({
  type,
  text,
  charWidth,
}: TextDescription & {
  type: string;
}) {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl justify-center">
      {typeMap[type]({ text, charWidth })}
    </div>
  );
}
