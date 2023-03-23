import React from "react";
import Sdata from "./Sdata";


const SlotM = (props) => {    

    let { x, y, z } =props;
    
        return (
            <>
                {/* <h2>{props.x}{" "}{ props.y } {" "}{props.z}</h2> */}       
                
                <h2>{x} {y} {z}</h2>
               <span style={{fontSize:"20px", backgroundColor:"gray"}} > {((x === y ) && (y === z)) ? 'Its Match' : 'Its Not Match'}</span>
            </>
        );
    
}

export default SlotM;