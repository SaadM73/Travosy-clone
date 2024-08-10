import { Fragment, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MobileStepper,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Typography
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PublicServices from '../api/public/PublicServices';
import axios from 'axios';
import PublicRoutes from '../api/public/Public.routes';
import useHeader from '../hooks/useHeader';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import KarachiData from "./KarachiData.json";
import Details from "./Details.json";

const CustomMobileStepper = styled(MobileStepper)(({ theme }) => ({
  '& .MuiMobileStepper-progress': {
    height: 8,
    borderRadius: 4,
    background: "#e3003773"
  },
  ".MuiLinearProgress-bar": {
    background: "#e30037"
  }
}));

function ProgressMobileStepper({ activeStep, handleNext, handleBack }) {

  return (
    <CustomMobileStepper
      variant="progress"
      steps={3}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: "100%", flexGrow: 1 }}
      nextButton={
        <Button
          sx={{
            alignItems: "center",
            color: "#e30037"
          }}
          size="small"
          onClick={handleNext}
          disabled={activeStep === 3}
        >
          <Typography>
            {activeStep == 2 ? "Search" : "Next"}
          </Typography>
          <KeyboardArrowRight sx={{ color: "#e30037" }} />
        </Button>
      }
      backButton={
        <Button
          sx={{
            alignItems: "center",
            color: "#e30037"
          }}
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft sx={{ color: activeStep != 0 && "#e30037" }} />
          <Typography>
            Back
          </Typography>
        </Button>
      }
    />
  );
}

export default function Plan() {
  const [activeStep, setActiveStep] = useState(0);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [geoIds, setGeoIds] = useState({ khi: "", lhr: "", isl: "" });
  const [selectedCityValue, setSelectedCityValue] = useState('');
  const [data, setData] = useState([]);
  console.log("🚀 ~ Plan ~ data:", data)
  const [loading, setLoading] = useState(false);
  const { host, key } = useHeader();
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep != 2) {
        return prevActiveStep + 1
      } else {
        searchHotelsData()
        return prevActiveStep + 1
      }
    });

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const disableDatesBeforeCheckIn = (date) => {
    return checkIn && date.isBefore(checkIn, 'day');
  };

  const disableDatesAfterCheckOut = (date) => {
    return checkOut && date.isAfter(checkOut, 'day');
  };

  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCitySelectionChange = (event) => {
    setSelectedCityValue(event.target.value);
  };

  const getGeoLocationIds = async () => {
    try {
      const result = await PublicServices.getGeoLocationIds();
      if (result.responseCode == 200) {
        setGeoIds(() => ({ ...geoIds, khi: result.data.karachi, lhr: result.data.lahore, isl: result.data.islamabad }))
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const searchHotelsData = async () => {
  //   setLoading(true);
  //   try {
  //     // Simulate a network delay
  //     setTimeout(() => {
  //       // Simulate fetching data from your JSON file
  //       const result = KarachiData;

  //       // Assuming the structure is the same as your API response
  //       if (result) {
  //         setData(result);
  //       }
  //       setLoading(false);
  //     }, 3000); // 2000ms delay for the loading state
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //   }
  // };

  const searchHotelsData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        PublicRoutes.searchHotels + `?geoId=${selectedCityValue}&checkIn=${moment(checkIn).format("YYYY-MM-DD")}&checkOut=${moment(checkOut).format("YYYY-MM-DD")}`, {
        headers: {
          "x-rapidapi-key": key,
          "x-rapidapi-host": host,
        }
      })
      if (result.status == 200) {
        setData(result?.data?.data?.data);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = async (id) => {
    const result = await axios.get(PublicRoutes.getHotelDetails + `?id=${id}&checkIn=${moment(checkIn).format("YYYY-MM-DD")}&checkOut=${moment(checkOut).format("YYYY-MM-DD")}`, {
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      }
    });
    if (result) {
      navigate("/tourpackage", { state: result?.data?.data })
    }
  }

  // const searchRestaurantsData = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await axios.get(
  //       PublicRoutes.searchRestaurants + `?locationId=${selectedCityValue}`, {
  //       headers: {
  //         "x-rapidapi-key": key,
  //         "x-rapidapi-host": host,
  //       }
  //     })
  //     if (result.status == 200) {
  //       setData(result.data.data.data);
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    getGeoLocationIds();
  }, [])

  return (
    <Fragment>
      {activeStep != 3 && (
        <ProgressMobileStepper activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
      )}
      {activeStep == 0 && (
        <Grid container gap={2} justifyContent={"center"} p={2}>
          <Grid item md={3.5}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Box component={Paper}>
                <DateCalendar
                  sx={{
                    "& .Mui-selected": {
                      background: "#e30037 !important"
                    }
                  }}
                  value={checkIn}
                  onChange={(newValue) => setCheckIn(newValue)}
                  shouldDisableDate={disableDatesAfterCheckOut}
                  disablePast
                />
              </Box>
            </LocalizationProvider>
          </Grid>
          <Grid item md={3.5}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Box component={Paper}>
                <DateCalendar
                  sx={{
                    "& .Mui-selected": {
                      background: "#e30037 !important"
                    }
                  }}
                  value={checkOut}
                  onChange={(newValue) => setCheckOut(newValue)}
                  shouldDisableDate={disableDatesBeforeCheckIn}
                  disablePast
                />
              </Box>
            </LocalizationProvider>
          </Grid>
        </Grid>
      )}
      {activeStep == 1 && (
        <Grid container justifyContent={"center"} p={2}>
          <Grid item md={7}>
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2
              }}
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography variant={"h4"}>
                  What is your destination?
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                  justifyContent: "center",
                  gap: 2,
                  width: "100%"
                }}
                value={selectedCityValue}
                onChange={handleCitySelectionChange}
              >
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedCityValue === geoIds.khi
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value={geoIds.khi}
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>Karachi</Typography>}
                  />
                </Paper>
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedCityValue === geoIds.lhr
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value={geoIds.lhr}
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>Lahore</Typography>}
                  />
                </Paper>
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedCityValue === geoIds.isl
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value={geoIds.isl}
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>Islamabad</Typography>}
                  />
                </Paper>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      )}
      {activeStep == 2 && (
        <Grid container justifyContent={"center"} p={2}>
          <Grid item md={7}>
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2
              }}
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography variant='h4'>
                  Are you travelling
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                  justifyContent: "center",
                  gap: 2,
                  width: "100%"
                }}
                value={selectedValue}
                onChange={handleSelectionChange}
              >
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedValue === 'solo'
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value="solo"
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>Solo</Typography>}
                  />
                </Paper>
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedValue === 'family'
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value="family"
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>With family</Typography>}
                  />
                </Paper>
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedValue === 'friends'
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value="friends"
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>With friends</Typography>}
                  />
                </Paper>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      )}
      {/* {activeStep == 3 && (
        <Grid container justifyContent={"center"} p={2}>
          <Grid item md={7}>
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2
              }}
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography variant='h4'>Select Your Interest</Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                  justifyContent: "center",
                  gap: 2,
                  width: "100%"
                }}
                value={selectedInterestValue}
                onChange={handleInterestSelectionChange}
              >
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedInterestValue === 'hotels'
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value="hotels"
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>Hotels</Typography>}
                  />
                </Paper>
                <Paper
              sx={{
                width: "160px",
                boxShadow: selectedValue === 'family'
                  ? '0px 0px 5px 1px #e30037'
                  : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
              }}
            >
              <FormControlLabel
                value="family"
                control={
                  <Radio sx={{ display: 'none' }} />
                }
                sx={{
                  m: 0,
                  width: "100%"
                }}
                label={<Typography sx={{ p: 2, width: "100%" }}></Typography>}
              />
            </Paper>
                <Paper
                  sx={{
                    width: "160px",
                    boxShadow: selectedInterestValue === 'restaurants'
                      ? '0px 0px 5px 1px #e30037'
                      : '0px 0px 5px 1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <FormControlLabel
                    value="restaurants"
                    control={
                      <Radio sx={{ display: 'none' }} />
                    }
                    sx={{
                      m: 0,
                      width: "100%"
                    }}
                    label={<Typography sx={{ p: 2, width: "100%" }}>Restaurants</Typography>}
                  />
                </Paper>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      )} */}
      {loading ? (
        <Box sx={{ width: "100%", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CircularProgress sx={{ color: "#e30037" }} />
        </Box>
      ) : (
        <Container>
          {data.length > 0 && (
            <Grid container justifyContent={"center"} rowGap={2} mb={4}>
              <Grid itemd md={10}>
                <Typography variant='h4' sx={{ mt: 2 }}>Search Results:</Typography>
              </Grid>
              <Grid item md={10}>
                <Grid container spacing={2}>
                  {data.map((item) => {
                    const imageUrl = item?.cardPhotos[0]?.sizes?.urlTemplate?.split('?')[0];
                    return (
                      <Grid key={item.id} item md={4}>
                        <Card sx={{ height: "100%" }}>
                          <CardMedia
                            component={"img"}
                            sx={{ height: 140 }}
                            src={imageUrl}
                            title={item.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{
                                whiteSpace: "nowrap",
                                width: "100%",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <Rating
                                name="half-rating-read"
                                defaultValue={item?.bubbleRating?.rating}
                                precision={0.5}
                                readOnly
                              />
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button onClick={() => handleNavigate(item.id)} size="small">See Details</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Container>
      )}
    </Fragment>
  )
}