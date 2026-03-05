import { Router } from "express";
import Place from './model.js';
import { JWTVerify } from "../../utils/jwt.js"

const router = Router();

router.post('/', async (req, res) => {
    const {
        title,
        city,
        photos,
        description,
        extras,
        price,
        perks, 
        checkin,
        checkout,
        guests,
    } = req.body;

    try {
        const {_id:owner } = await JWTVerify(req);

        const newPlaceDoc = await Place.create({
        owner,
        title,
        city,
        photos,
        description,
        extras,
        perks,
        price, 
        checkin,
        checkout,
        guests,
        })

        res.jason(newPlaceDoc); 
    } catch (error) {
        console.error(error);
        res.status(500).json('Deu erro ao criar o novo lugar');
    }
})

export default router;
