import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
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

dirtTex.magFilter = NearestFilter;
logTex.magFilter = NearestFilter;
grassTex.magFilter = NearestFilter;
woodTex.magFilter = NearestFilter;
glassTex.magFilter = NearestFilter;
groundTex.magFilter = NearestFilter;

groundTex.magFilter = NearestFilter
groundTex.wrapS = RepeatWrapping
groundTex.wrapT = RepeatWrapping

export {
    dirtTex,
    logTex,
    grassTex,
    woodTex,
    glassTex,
    groundTex
}