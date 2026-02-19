import { Card } from "../../models/card.js";

export const updateCard = async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
