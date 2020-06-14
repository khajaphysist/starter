import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { MyQuery } from "../apollo-types/MyQuery";
import { AddPost, AddPostVariables } from "../apollo-types/AddPost";
import { DeletePost, DeletePostVariables } from "../apollo-types/DeletePost";
import { Form, Input, Button } from "antd";
import { keycloak } from "../libs/keycloak";

const LIST_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
      author
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost($author: String, $title: String) {
    insert_posts_one(object: { author: $author, title: $title }) {
      id
      author
      title
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: Int!) {
    delete_posts_by_pk(id: $id) {
      id
    }
  }
`;

const DeletePostMut: React.FC<{ id: number }> = ({ id }) => {
  const [deletePost, result] = useMutation<DeletePost, DeletePostVariables>(
    DELETE_POST
  );
  return (
    <Button
      danger
      onClick={() => deletePost({ variables: { id } })}
      loading={result.loading}
    >
      Delete
    </Button>
  );
};

function PostList() {
  const { loading, error, data } = useQuery<MyQuery>(LIST_POSTS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No Posts</div>;
  const posts = data.posts.map((p) => (
    <div key={p.id}>
      {p.title} by {p.author}
      <DeletePostMut id={p.id} />
    </div>
  ));
  return <div>{posts}</div>;
}

function PostEdit() {
  const user = keycloak.idTokenParsed?.sub || "";
  const [addPost, result] = useMutation<AddPost, AddPostVariables>(ADD_POST);
  return (
    <Form
      initialValues={{
        title: "",
      }}
      onFinish={(values) => {
        addPost({ variables: { title: values.title, author: user } });
      }}
    >
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={result.loading}>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default function PostView() {
  return (
    <div>
      <PostEdit />
      <PostList />
    </div>
  );
}
