import { z } from "zod";

export const Component = z.object({
  id: z.string(),
  typeName: z.string(),
  typeId: z.string(),
  connectorId: z.string(),
  name: z.string(),
  description: z.string(),
  isNativelyDisplayed: z.boolean(),
  data: z.any(),
});

export type Component = z.infer<typeof Component>;
