import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { CardsData } from "./CardsData";
import "./CardsTaller.css";

export default function ActionAreaCard() {
    return (
        <ul className="listaTarjetas">
            {CardsData.map((item, index) => {
                return (
                    <Card key={index} className="tarjeta">
                        <CardActionArea href={item.path}>
                            <CardMedia
                                component={item.component}
                                height={item.height}
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="titleCards"
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    className="description"
                                >
                                    {item.description}
                                </Typography>
                                <Typography
                                    variant="overline"
                                    component="span"
                                    className={item.classNameStatus}
                                >
                                    {item.status}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                );
            })}
        </ul>
        // <Card className="tarjeta" sx={{ maxWidth: 600 }}>
        //   <CardActionArea>

        //     <CardMedia
        //       component="img"
        //       height="100"
        //       image="/img/backdrop.png"
        //       alt="green iguana"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="div">
        //         Lizard
        //       </Typography>
        //       <Typography variant="body2" color="text.secondary">
        //         Lizards are a widespread group of squamate reptiles, with over 6,000
        //         species, ranging across all continents except Antarctica
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        // </Card>
    );
}
