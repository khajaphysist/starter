/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPost
// ====================================================

export interface AddPost_insert_posts_one {
  __typename: "posts";
  id: number;
  author: string;
  title: string;
}

export interface AddPost {
  /**
   * insert a single row into the table: "posts"
   */
  insert_posts_one: AddPost_insert_posts_one | null;
}

export interface AddPostVariables {
  author?: string | null;
  title?: string | null;
}
