import { Space, Spin } from "antd";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default LoadingScreen;
