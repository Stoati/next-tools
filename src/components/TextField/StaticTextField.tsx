import { FunctionComponent } from "react";
import getComponentData from "../../api/getComponentData";

type CodeComponent = FunctionComponent<{ componentId: string }>;

const StaticTextField = (async ({ componentId }: { componentId: string }) => {
  const data = await getComponentData(componentId);

  return <div>{data}</div>;
}) as unknown as CodeComponent;

export default StaticTextField;
