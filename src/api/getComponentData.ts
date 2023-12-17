import getFullComponent from "./getFullComponent";

const getComponentData = async (componentId: string) => {
  const data = await getFullComponent();

  const component = data.find((item) => item.id === componentId);

  if (!component) {
    return "";
  }

  if (component.typeName === "simpleText") {
    return component.data.values["fr-FR"] as string;
  }

  return "";
};

export default getComponentData;
