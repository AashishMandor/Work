/* eslint-disable import/no-anonymous-default-export */
import { Container, Grid, Paper } from "@mui/material";
import CountUp from "react-countup";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [sclassStudents, setSclassStudents] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const classID = currentUser?.teachSclass?._id;
  const subjectID = currentUser?.teachSubject?._id;

  useEffect(() => {
    const fetchClassStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/classes/1/students"
        );
        setSclassStudents(response.data);
      } catch (error) {
        console.error("Error fetching class students:", error);
      }
    };

    fetchClassStudents();
  }, [subjectID, classID]);

  const numberOfStudents = sclassStudents.length;
  const numberOfSessions = 3 || 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper sx={{ backgroundColor: "var(--orange)" }}>
            <Data start={0} end={numberOfStudents} duration={2.5} />
            <hr className="divider" />
            <Title>Total Checkin Today</Title>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper sx={{ backgroundColor: "var(--green)" }}>
            <Data start={0} end={numberOfSessions} duration={5} />
            <hr className="divider" />
            <Title>Out of Office Now</Title>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper sx={{ backgroundColor: "var(--red)" }}>
            <Data start={0} end={24} duration={4} />
            <hr className="divider" />
            <Title>Total Checkout</Title>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper sx={{ backgroundColor: "var(--darkblue)" }}>
            <Data start={0} end={30} duration={4} suffix="hrs" />
            <hr className="divider" />
            <Title>Late Reporting</Title>
          </StyledPaper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              pt: 0,
              pb: 0,
              pl: 2,
              pr: 0,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "var(--darkpurple)",
            }}
          >
            <h4 style={{ color: "white" }}>My Organization</h4>
          </Paper>
        </Grid>
        <Grid item xs={12}>
  <Paper>
    <div
      style={{
        display: "flex",
        gap: "26px",
        flexWrap: "wrap",
      }}
    >
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column", 
              width: "170px",
              border: "1px solid black",
              borderRadius: "8px",
              // padding: "8px", 
            }}
          >
            <h6 style={styles.maintenanceTitle}>
              COLONY MAINTENANCE-ELE
            </h6>

            <hr className="divider" style={{ width: "100%" }} />

            <div   style={{
              // alignItems: "flex-start",
              display:"flex",
              justifycontent: "center",
              alignitems: "center"


              // padding: "8px", 
            }}>
              <p style={styles.boxx}>IN : {0} | OUT : {1}</p>
            </div>
          </div>
        ))}
    </div>
  </Paper>
</Grid>

      </Grid>
    </Container>
  );
};

// Styled Components and CSS variables

const StyledPaper = styled(Paper)`
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  height: 125px;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: var(--title-font-size);
  color: white; // Set text color to white
`;

const Data = styled(CountUp)`
  font-size: var(--data-font-size);
  color: white; // Set text color to white
`;

// CSS Variables
const GlobalStyle = createGlobalStyle`
  :root {
    --orange: RGB(255, 152, 90);
    --green: rgb(25, 161, 25);
    --red: rgb(255, 77, 77);
    --darkblue: rgb(0, 0, 139);
    --darkpurple: rgb(99,60,208);
    --padding: 16px;
    --divider-color: #ccc;
    --title-font-size: 1.1rem;
    --data-font-size: calc(1.2rem + 0.5vw);
  }

  .divider {
    width: 100%;
    border: 1px solid var(--divider-color);
  }
`;

// Main export
export default () => (
  <React.Fragment>
    <GlobalStyle />
    <HomePage />
  </React.Fragment>
);
const styles = {
  maintenanceTitle: {
    margin: 0,
    padding: "10px",
    fontSize: "10px",
  },
  
};


