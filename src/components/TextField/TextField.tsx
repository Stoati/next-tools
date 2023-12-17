import React from "react";
import EditableChecker from "../EditableChecker/EditableChecker";
import StaticTextField from "./StaticTextField";
import EditableTextField from "./EditableTextField";

const TextField = ({ componentId }: { componentId: string }) => {
  return (
    <EditableChecker
      editableComponent={<EditableTextField componentId={componentId} />}
    >
      <StaticTextField componentId={componentId} />
    </EditableChecker>
  );
};

export default TextField;
