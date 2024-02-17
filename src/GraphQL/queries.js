import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/clsq2bhss0qiw01w9fq9fhb3w/master');

export const carouselimagesQuery = gql`
  {
    carouselimages {
      carouselimageUrl
      caption
      id
    }
  }
`;

export const teammembersQuery = gql`
  {
    teammembers {
      id
      memberImageUrl
      memberLinkedin
      memberName
    }
  }
`;
