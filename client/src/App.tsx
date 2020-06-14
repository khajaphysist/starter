import "./App.less";

import { Button } from "antd";
import React from "react";
import { keycloak } from "./libs/keycloak";
import PostView from "./components/PostView";

function App() {
  const logout = () => keycloak.logout();
  return (
    <div style={{ padding: 100}}>
      <Button type="primary" onClick={logout}>
        Logout
      </Button>
      <PostView />
    </div>
  );
}

export default App;
