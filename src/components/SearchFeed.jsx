import { Box, Typography } from '@mui/material'
import { featchFromApi } from '../utils/featchFromApi'
import React, { useEffect, useState } from 'react'
import { Videos } from './index'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

    const [videos, setVideos] = useState([]);

    const {searchTerm} = useParams();

    useEffect(() => {
        featchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => { setVideos(data.items) })
    }, [searchTerm]);



console.log(videos,"I Am A SearchFeed Comopnenets")
    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
                variant='h4'
                fontWeight="bold"
                mb={2}
                sx={{ color: "white" }}
            >
                Search Result For : <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed
