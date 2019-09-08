import { useStaticQuery, graphql } from "gatsby";

export default function useImageList() {
  return useStaticQuery(
    graphql `
      query ImgList {
        images: allFile(filter: {extension: {in: ["png", "jpg", "jpeg"]}}) {
          edges {
            node {
              extension
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  `);
}