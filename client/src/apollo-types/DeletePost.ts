/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePost
// ====================================================

export interface DeletePost_delete_posts_by_pk {
  __typename: "posts";
  id: number;
}

export interface DeletePost {
  /**
   * delete single row from the table: "posts"
   */
  delete_posts_by_pk: DeletePost_delete_posts_by_pk | null;
}

export interface DeletePostVariables {
  id: number;
}
