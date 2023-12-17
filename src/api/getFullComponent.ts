import { z } from "zod";
import { Component } from "../types/Component";

const getFullComponent = async () => {
  //@ts-expect-error
  const stoatiId = window.StoatiId as string | undefined;

  if (!stoatiId) {
    throw new Error(
      "The Stoati tools have not been properly initialized please use init(StoatiId)"
    );
  }
  const data = await fetch(
    //@ts-expect-error
    process.env.STOATI_API_URL + "/shops/" + stoatiId + "/modules"
  );

  const response = await data.json();

  return z.array(Component).parse(response);
};

export default getFullComponent;
