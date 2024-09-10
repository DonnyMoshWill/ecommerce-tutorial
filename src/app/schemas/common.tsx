export type PageMetadataProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type LinkDescription = { text: string; path: string };

export type TextDescription = { text: string; charWidth: number };
