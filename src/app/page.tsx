import { genericMetadata } from "./lib/metadata";
import { CenteredImage } from "./components/images/CenteredImage";
import { CenteredText } from "./components/text/CenteredText";
import { CardLink } from "./components/navigation/Navbar/CardLink";
import { CharacterCarousel } from "./components/images/CharacterCarousel";

export const generateMetadata = genericMetadata;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 snap-y snap-mandatory overflow-y-scroll h-screen">
      <CenteredImage
        src="/cttv-logo.png"
        alt="Call to the Void Logo"
        width={1024}
        height={280}
        priority={true}
      />

      <CenteredText
        type={"h2"}
        text={"Experience competitve RPG gameplay"}
        charWidth={10}
      />
      <CenteredText
        type={"p"}
        text={
          "Engage with a strategic combat system containing unparalelled depth, where the smallest decisions have inflence over a myriad of game outcomes."
        }
        charWidth={75}
      />

      <CenteredImage
        src="/sunset.png"
        alt=""
        width={1024}
        height={280}
        priority={true}
      />
      <CenteredImage
        src="/boxes.png"
        alt=""
        width={1024}
        height={280}
        priority={true}
      />

      <CharacterCarousel />
      <CenteredImage
        src="/mountain.png"
        alt=""
        width={1024}
        height={280}
        priority={true}
      />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 snap-always snap-center">
        <CardLink
          href=""
          title="Learn"
          description="Videos and documentation on how to play Call to the Void."
        />
        <CardLink
          href=""
          title="Strategy"
          description="Deckbuilding tips and tricks, strategies and more."
        />
        <CardLink
          href=""
          title="Contact"
          description="Get in touch with the team."
        />
      </div>
    </main>
  );
}
