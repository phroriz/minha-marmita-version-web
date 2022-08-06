import { Request, Response } from "express";
import { sequelize } from "../instances/mysql";

export const home = async (req: Request, res: Response) => {
    try {
        await sequelize.authenticate();
        console.log("funcionou")
    } catch(error) {
        console.log("Deu problema: ",error);
    }
    res.render('pages/home');

}