import { Spin } from "antd";

const Spinner: React.FC = () => (
  <Spin tip="Loading" size="large" data-testid="loading" />
);

export default Spinner;
