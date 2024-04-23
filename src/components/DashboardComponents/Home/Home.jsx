import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import HomeTabs from "../HomeTabs";

const Home = () => {
  return (
    <div style={{ padding: "20px", height: '1130px', width: '1170px' }}>
      <Container>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "left", marginBottom: "15px", fontWeight: 600 }}
        >
          Push Notification
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <HomeTabs />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
