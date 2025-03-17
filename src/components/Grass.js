import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants"

export function Grass(rowIndex){
    const grass = new THREE.Group();
    grass.position.y = rowIndex * tileSize;

    const fundation = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({color: 0xbaf455})
    );
    fundation.position.z = 1.5;
    grass.add(fundation);

    return grass;
}