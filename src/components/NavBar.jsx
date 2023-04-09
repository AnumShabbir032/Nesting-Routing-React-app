import React from "react";
import { Box } from "@mui/material";
// import Paper from '@mui/material/Paper';
import Logo from "../assets/McDonalds_Logo.png";
import AButton from "./Button"
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';

import "../App.css"
function NavBar() {
    return (
        <div>
            <Paper square={true} variant="elevation">
                <Box sx={{  display: "flex", margin: "10px 20px" }}>
                    <Box maxWidth='sm' sx={{  display: "flex", width: 180, height: 170 }}>
                        <Link to="/">
                            <img alt="" src={Logo} width="170" />
                        </Link>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>

                        <Box sx={{ height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ margin: "10px 20px" }}>
                                <Link to="" className="link">Careers</Link>
                                <Link to="" className="link">Contact Us</Link>
                            </Box>
                            <Box sx={{ margin: "0px 20px", width: "40% ", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Link to="" className="link"> <SearchIcon sx={{ fontSize: 25 }} /> Search</Link>
                                <Link to="" className="link">  <LocationOnIcon sx={{ fontSize: 25, color: "#db0007" }} /> Locate Me</Link>
                                <AButton value="Order on McDelivery" variant="regular" sx={{
                                 fontSize: "18px", color: "#292929", '&:hover': { backgroundColor: "#ffbc0d" }, backgroundColor: "#ffbc0d", padding: "15px 30px"
                                }}></AButton>
                            </Box>
                            {/* <Box>
                        </Box> */}
                        </Box>
                        <Box sx={{height: "75px", width: "75%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Link to="/fullmenu/*" className="link lihover">Our Menu</Link>
                            <Link to="/about" className="link lihover">About Our Food</Link>
                            <Link to="/righttoknow" className="link lihover">Your Right To Know</Link>
                            <Link to="/ourapp" className="link lihover">Our App</Link>
                            <Link to="/family" className="link lihover">Family</Link>
                            <Link to="/trending" className="link lihover">Trending Now</Link>
                        </Box>

                    </Box>



                </Box>
            </Paper>
        </div>
    );
}
export default NavBar;