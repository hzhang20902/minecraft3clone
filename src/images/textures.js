import { TextureLoader } from "three";
import { 
    dirtImg,
    logImg,
    woodImg,
    grassImg,
    glassImg } from "./images";

    
const dirtTex = new TextureLoader().load(dirtImg)
const logTex = new TextureLoader().load(logImg)
const grassTex = new TextureLoader().load(grassImg)
const woodTex = new TextureLoader().load(woodImg)
const glassTex = new TextureLoader().load(glassImg)
const groundTex = new TextureLoader().load(grassImg)

export {
    dirtTex,
    logTex,
    grassTex,
    woodTex,
    glassTex,
    groundTex
}