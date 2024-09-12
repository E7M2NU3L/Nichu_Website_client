import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FetchSingleEvent } from '../api/db/blogs';

const SingleEvent = () => {
    const link = useLocation();
    const innerLists = link.pathname.split('/');
    const EventId = innerLists[innerLists.length - 1];
    const [Event, setEvent] = useState(null);
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await FetchSingleEvent(EventId);

                if (!response) toast.error("Fetching Failed");
                setEvent(response);
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                }
                else toast.error("Unknown Error");
            }
        };

        fetchEvent();
    }, [EventId]);

  return (
    <main>
        {Event ? (
            <React.Fragment>
                <Container className="bg-white text-black p-8 mx-auto">
                {/* Blog Title and Main Image */}
                <Box className="mb-8 text-center">
                    <Typography variant="h3" component="h1" className="text-blue-500 font-bold">
                    {Event?.Title}
                    </Typography>
                    <CardMedia
                    component="img"
                    height="500"
                    image={Event?.Image}
                    alt="Workshop Main Image"
                    className="mt-6 rounded-lg"
                    />
                </Box>

                {/* Blog Description */}
                <Box className="mb-12">
                    <Typography variant="body1" className="whitespace-pre-line leading-relaxed text-lg">
                    {Event?.Description}
                    </Typography>
                </Box>

                {/* Event Pictures */}
                <Box className="mb-6">
                    <Typography variant="h4" component="h2" className="text-blue-500 font-bold text-center mb-4">
                    Event Highlights
                    </Typography>
                    <Grid container spacing={4} mt={1}>
                    {Event?.eventPics.map((pic, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="shadow-lg">
                        <CardMedia
                                component="img"
                                height="250"
                                width="350"
                                image={pic}
                                alt={`Event Picture ${index + 1}`}
                                className="rounded-lg object-cover w-[350px] h-[250px]"
                                />
                        </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Box>
                </Container>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <main className='min-h-[90vh] flex items-center justify-center'>
                    <CircularProgress />
                </main>
            </React.Fragment>
        )}
    </main>
  );
};

export default SingleEvent;
