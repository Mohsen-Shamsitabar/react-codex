import type { CentralResources } from "@/types/cards.ts";
import { generatePrimaryResource } from "@/utilities/resource-generators.ts";

const generateCentralResources = (): CentralResources => {
  const rngNumber = Math.round(Math.random() * 3);

  const result: CentralResources = [];

  for (let i = 0; i < rngNumber; i++) {
    result.push(generatePrimaryResource());
  }

  return result;
};

export default generateCentralResources;
