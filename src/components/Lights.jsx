import React from "react";

const Lights = () => {

    return (
        <>
            {/* <pointLight position={[0, 3, 0]}
        color={"#ff0808"}
        intensity={100.5}/> */}
            <directionalLight position={[5, 5, 5]}
                color={"#ffffff"}
                intensity={14}
                target-position={[10, 10, 10]}
                castShadow={true} 
                shadow-bias={-0.001}/>


            <ambientLight color={"#FFFFFF"} intensity={2} />
        </>
    )

}

export default Lights