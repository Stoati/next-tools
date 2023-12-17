import { useEffect, useState } from "react";
import getComponentData from "../../api/getComponentData";
import React from "react";

const EditableTextField = ({ componentId }: { componentId: string }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    getComponentData(componentId).then((data) => {
      if (data) {
        setValue(data);
      }
    });
  }, [componentId]);

  return (
    <input
      type="text"
      value={value}
      style={{
        background: "none",
      }}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EditableTextField;
