import { ResolvingMetadata } from "next";
import { PageMetadataProps } from "../schemas/common";
import { pageConstants } from "../site-constants";

export const genericMetadata = async (
  { params, searchParams }: PageMetadataProps,
  parent: ResolvingMetadata
) => {
  const { title, description } = await parent;
  let pagePath = "home";

  if (Object.keys(params).length) {
    console.log("TODO: page path logic");
  } else {
    return {
      title: `${pageConstants[pagePath].title} - ${pageConstants["index"].title}`,
      description: `${pageConstants["index"].description} - ${pageConstants[pagePath].description}`,
    };
  }

  let pageTitle = pageConstants[pagePath].title;
  let pageDescription = pageConstants[pagePath].description;
  if (title?.absolute) {
    pageTitle = `${title?.absolute} - ${pageTitle}`;
  }
  if (description) {
    pageDescription = `${description} - ${pageTitle}`;
  }
  return {
    title: pageTitle,
    description: pageDescription,
  };
};
