/* eslint-disable import/no-anonymous-default-export */
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Container, Grid, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import styled, { createGlobalStyle } from "styled-components";

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
      <StyledPaper sx={{ backgroundColor: "var(--orange)", padding: 2 }}>
        {/* Flex container to align number and icon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Data start={0} end={numberOfStudents} duration={2.5} />
          <LeaderboardIcon sx={{ fontSize: 30, marginLeft: 21, marginTop: 3 , color: 'white'}} /> {/* Icon next to the number */}
        </div>
        <hr className="divider" style={{ marginBottom: '-5px', width:"100%"}} /> {/* Adjust divider margin */}
        <Title sx={{ marginTop: '10px' }}>Total Check In Today</Title> {/* Move title upwards */}
      </StyledPaper>
    </Grid>

       

<Grid item xs={12} md={3} lg={3}>
      <StyledPaper sx={{ backgroundColor: "var(--green)", padding: 2 }}>
        {/* Flex container to align number and icon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Data start={0} end={numberOfSessions} duration={5} />
          <LeaderboardIcon sx={{ fontSize: 30, marginLeft: 21, marginTop: 3 , color: 'white'}} /> {/* Icon next to the number */}
        </div>
        <hr className="divider" style={{ marginBottom: '-5px',width:"100%" }} /> 
        <Title sx={{ marginTop: '10px' }}>Out of Office Now</Title> 
      </StyledPaper>
    </Grid>


        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper sx={{ backgroundColor: "var(--red)" }}>
            <div style={{display: "flex", alignItems: "center"}}>
            <Data start={0} end={24} duration={4} />
            <LeaderboardIcon sx={{ fontSize: 30, marginLeft: 19, marginTop: 3 , color: 'white'}} /> 
            </div>
            <hr className="divider" style={{marginBottom: '-5px',width:"100%" }} />
            <Title sx={{ marginTop: '10px' }}>Total Checkout</Title>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper sx={{ backgroundColor: "var(--darkblue)" }}>
          <div style={{display: "flex", alignItems: "center"}}>
            <Data start={0} end={30} duration={4} suffix="hrs" />
            <LeaderboardIcon sx={{ fontSize: 30, marginLeft: 15, marginTop: 3 , color: 'white'}} /> 
            </div>
            <hr className="divider"  style={{marginBottom: '-5px',width:"100%" }}/>
            <Title sx={{ marginTop: '10px' }}>Late Reporting</Title>
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
           <h4 style={{ color: "white", display: "flex", justifyContent: "space-between" }}>
  My Organization
  <span style={{ textAlign: "right", flex: "1" }}>
    | ver 3.21 : 10 | ver 3.1 : 1 | ver 3.0 : 2 | iOS : 2   
  </span>
</h4>

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
            style={styles.maintenanceDetails}
           
          >
            <h6 style={styles.maintenanceTitle}>
              COLONY MAINTENANCE-ELE 
              
            </h6>

            <hr className="divider" style={{ width: "100%", color:"red"}} />

            <div   style={styles.maintenanceDetails2}>
              <p style={{textAlign:"center" , background:"white",}}>IN : {0} | OUT : {1}</p>
              </div>
              <hr className='divider' style={{width: "100%" }}/>
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
  maintenanceDetails: {display: "flex",
      alignItems: "flex-start",
      flexDirection: "column", 
      // outerHeight:"40%",
      width: "170px",
      border: "1px solid black",
      borderRadius: "8px", 
      backgroundColor:"red"
  },
  maintenanceDetails2: {
  background:"white",
  width:"100%"

  }
  
};


