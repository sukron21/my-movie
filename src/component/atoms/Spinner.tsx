import { Spin } from "antd";

const contentStyle: React.CSSProperties = {
  padding: 50,
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

const Spinner: React.FC = () => (
  <Spin tip="Loading" size="large">
    {content}
  </Spin>
);

export default Spinner;
