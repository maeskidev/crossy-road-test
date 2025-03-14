import * as THREE from "three";

export const player2 = Player2();

function Player2() {
    const body = new THREE.Mesh(
        new THREE.SphereGeometry(10, 20, 20),
        new THREE.MeshPhongMaterial({
            color: "#FFF",
            flatShading: true,
        })
    );

    body.position.z = 20;
    body.position.x = 30

    return body;
}