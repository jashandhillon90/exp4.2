import { Card } from "../../models/card.js";

export const deleteCard = async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndDelete(req.params.id);

    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
