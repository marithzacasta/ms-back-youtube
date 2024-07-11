import { Router } from "express";

const rutacanal = Router();

rutacanal.get("/", (req, res)=>{
    res.json({"aplicacion" : "Youtube"})
})

rutacanal.get("/canal", (req, res)=>{
    res.json({
       "msg" : "hola mundo",
       "user" : "Marithza",
       "aplicacion" : "Youtube",
       "type" : "Backend"
    })
})

export default rutacanal;