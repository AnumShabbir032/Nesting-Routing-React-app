import React from "react";
import { Button } from "@mui/material";

function AButton(props) {

    let { sx, onClick, variant, value,size } = props


    return (
        <Button sx={sx} onClick={onClick} size={size} variant={variant}> {value} </Button>
    )
}
export default AButton;