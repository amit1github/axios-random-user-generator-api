import React from "react";
import {
  Box,
  Grid,
  Card,
  Paper,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader,
  Container,
  Stack,
  IconButton,
} from "@mui/material";
import { AlternateEmail, Phone, Map, Cake } from "@mui/icons-material";

const Cards = ({ details }) => {
  return (
    <Container>
      <Paper
        elevation={2}
        sx={{
          width: 400,
          // height: 400,
          display: "flex",
          justifyContent: "center",
          direction: "row",
        }}
      >
        <Stack>
          <Avatar
            src={details.picture?.large}
            //multiple option to pass on or to render use ? like details.picture?.large
            alt="by-api"
            sx={{
              width: 150,
              height: 150,
              mt: "-80px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // position: "relative"
              // borderShadow: "0 7px 30px -10px rgba(150, 170,180, 0.5)"
            }}
          />
          <CardContent>
            <Box>
              <Typography variant="h5" component="span" paddingRight="10px">
                {details.name?.first}
              </Typography>
              <Typography variant="h5" component="span">
                {details.name?.last}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <Map />
                <Typography>{details.location?.city}</Typography>
              </IconButton>
              <IconButton>
                <Phone />
                <Typography>{details.phone}</Typography>
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <AlternateEmail />
                <Typography>{details.email}</Typography>
              </IconButton>
              <IconButton>
                <Cake />
                <Typography>{details.dob?.age}</Typography>
              </IconButton>
            </Box>
          </CardContent>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Cards;
