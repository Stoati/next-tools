"use client";

import { ReactNode } from "react";

const EditableChecker = ({
  children,
  editableComponent,
}: {
  children: ReactNode;
  editableComponent: ReactNode;
}) => {
  const params = new URLSearchParams(document.location.search);

  const editFlag = params.get("stoatiEdit");

  if (!editFlag) {
    return children;
  }

  return editableComponent;
};

export default EditableChecker;
