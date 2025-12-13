import type { PrimaryResource } from "@/types/cards.ts";
import { generatePrimaryResource } from "@/utilities/resource-generators.ts";

const generateRequirements = (primaryResource: PrimaryResource) => {
  const result: PrimaryResource[] = [
    primaryResource,
    primaryResource,
    primaryResource,
  ];

  const rngNumber = Math.round(Math.random() * 2);

  for (let i = 0; i < rngNumber; i++) {
    const newResource = generatePrimaryResource();

    result.push(newResource);
  }

  return result;
};

export default generateRequirements;
