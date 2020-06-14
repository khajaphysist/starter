/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyQuery
// ====================================================

export interface MyQuery_posts {
  __typename: "posts";
  id: number;
  title: string;
  author: string;
}

export interface MyQuery {
  /**
   * fetch data from the table: "posts"
   */
  posts: MyQuery_posts[];
}
