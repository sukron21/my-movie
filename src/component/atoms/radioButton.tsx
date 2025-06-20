import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useNavigate, useParams } from "react-router-dom";

type radiosButton = {
  value: string;
  label: string;
};

interface Radios {
  data: radiosButton[];
}

const RadioButtonAntd = ({ data }: Radios) => {
  const { id } = useParams();
  const [value, setValue] = useState<string>(id ? id : "");
  const navigate = useNavigate();
  console.log("value", value);

  const onChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    navigate(`/category/${selectedValue}`);
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {data.map((item) => (
        <Radio
          key={item.value}
          value={item.value}
          className="text-white"
          style={{ fontSize: "20px" }}
        >
          {item.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioButtonAntd;
