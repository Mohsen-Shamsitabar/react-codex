import type { Card } from "@/types/cards.ts";
import { nanoid } from "nanoid";

const generateCardId = (): Card["id"] => `CARD_${nanoid()}`;

export default generateCardId;
