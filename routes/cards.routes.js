
import express from "express";
import { createCard } from "../controllers/cards/createCard.controller.js";
import { getCards } from "../controllers/cards/getCard.controller.js";
import { updateCard } from "../controllers/cards/updateCard.controller.js";
import { deleteCard } from "../controllers/cards/deleteCard.controller.js";

const router = express.Router();

router.post("/", createCard);
router.get("/", getCards);
router.put("/:id", updateCard);
router.delete("/:id", deleteCard);

export default router;
