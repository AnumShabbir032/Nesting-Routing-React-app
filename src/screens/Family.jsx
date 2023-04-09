import React from "react";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import ArchiveIcon from '@mui/icons-material/Archive';

function Family() {
    return (
        <div>
            <NavBar />

            {/* <Box sx={{ border: "1px solid black", height: 350 }}>
                <h1>Family</h1>

                <Button >Click Me <ArchiveIcon /> </Button>
            </Box> */}
            <h1>Family</h1>
        </div>
    );
}
export default Family;