import { Card } from "../../models/card.js";

export const createCard = async (req, res) => {
    const{name, suit} =req.body;
    try{
        const card = new Card({ name, suit });

        const savedCard = await card.save();
        res.status(201).json(savedCard);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}