import { z } from "zod";
import { Component } from "../types/Component";

const getFullComponent = async () => {
  //@ts-expect-error
  const stoatiId = process.env.STOATI_ID;

  if (!stoatiId) {
    throw new Error(
      "The Stoati tools have not been properly initialized please use init(StoatiId)"
    );
  }
  const data = await fetch(
    "http://localhost:8000/shops/" + stoatiId + "/modules"
  );

  const response = await data.json();

  return z.array(Component).parse(response);
};

export default getFullComponent;
