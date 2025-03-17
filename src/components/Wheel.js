import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants"

export function Wheel(position){


    const wheel = new THREE.Mesh(
        new THREE.BoxGeometry(12, 33, 12),
        new THREE.MeshLambertMaterial({color:"black", flatShading: true})
    );

    wheel.position.x = position;
    wheel.position.z = 0;

    return wheel;

}