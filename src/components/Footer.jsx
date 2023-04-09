import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/linkedIn.png";
import Tiktok from "../assets/tiktok.png";

import AppStore from "../assets/app_store_badge.png"
import GoogleApp from "../assets/google_play_badge.png"

// import "../assets"
function Footer() {
    return (
        <div>
            <Box sx={{ border: "1px solid black", height: "450px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ border: "1px solid black", height: "250px", width: "95%", display: "flex", justifyContent: "space-between" }} >
                    <Box sx={{ border: "1px solid black", width: "33%" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600", textAlign: "left", margin: "10px 0" }}>
                            Our Company
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Link to="" className="link-footer">Careers</Link>
                            <Link to="" className="link-footer">Contact Us</Link>
                        </Box>
                    </Box>

                    <Box sx={{ border: "1px solid black", width: "33%" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600", textAlign: "left", margin: "10px 0" }}>
                            Careers
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Link to="" className="link-footer">Corporate</Link>
                            <Link to="" className="link-footer">Restaurant</Link>
                        </Box>
                    </Box>

                    <Box sx={{ border: "1px solid black", width: "33%" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600", textAlign: "left", margin: "10px 0" }}>
                            Contact us
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Link to="" className="link-footer">Suggestion</Link>
                            <Link to="" className="link-footer">Complaint</Link>
                        </Box>
                    </Box>

                    <Box sx={{ border: "1px solid black", width: "33%" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600", textAlign: "left", margin: "10px 0" }}>
                            News Room
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Link to="" className="link-footer">Local</Link>
                        </Box>
                    </Box>

                </Box>



                <Box sx={{ border: "1px solid black", height: "100px", width: "95%", display: "flex", justifyContent: "space-between" }}>


                    <Box sx={{ border: "1px solid black", width: "50%", display: "flex", alignItems: "center" }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "8%", height: "70%", margin: "10px" }}>
                            <Link to="">
                                <img alt="" src={Facebook} width="40" />
                            </Link>
                        </Box>
                        <Box sx={{ border: "1px solid black", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "8%", height: "70%", margin: "10px" }}>
                            <Link to="">
                                <img alt="" src={Twitter} width="40" />
                            </Link>
                        </Box>
                        <Box sx={{ border: "1px solid black", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "8%", height: "70%", margin: "10px" }}>
                            <Link to="">
                                <img alt="" src={Youtube} width="40" />
                            </Link>
                        </Box>
                        <Box sx={{ border: "1px solid black", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "8%", height: "70%", margin: "10px" }}>
                            <Link to="">
                                <img alt="" src={Instagram} width="40" />
                            </Link>
                        </Box>
                        <Box sx={{ border: "1px solid black", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "8%", height: "70%", margin: "10px" }}>
                            <Link to="">
                                <img alt="" src={LinkedIn} width="40" />
                            </Link>
                        </Box>
                        <Box sx={{ border: "1px solid black", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "8%", height: "70%", margin: "10px" }}>
                            <Link to="">
                                <img alt="" src={Tiktok} width="40" />
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ border: "1px solid black", width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Link to="">
                            <img alt="" src={AppStore} width="" />
                        </Link>
                        <Link to="">
                            <img alt="" src={GoogleApp} width="" />
                        </Link>
                    </Box>
                </Box>

                <Box>
                    <Box sx={{ border: "1px solid black", width: "50%", display: "flex", alignItems: "center" }}>
                    <Link to="" className="link-footer">Suggestion</Link>
                            <Link to="" className="link-footer">Complaint</Link>
                    </Box>
                    <Box sx={{ border: "1px solid black", width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    </Box>
                </Box>

            </Box>
        </div>
    );
}
export default Footer;