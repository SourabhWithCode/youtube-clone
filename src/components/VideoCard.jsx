import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
const VideoCard = ({ video }) => {

    const { id: { videoId }, snippet } = video

    return (
        <Card sx={{width:{xs:'100%',sm:"358px",md:'320px'},borderRadius:"none",boxShadow:'none'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {
                        xs:'100%',
                        sm:"358px",
                        md:'320px'
                    }, height: 180 }}
                />
            </Link>
            <CardContent
                sx={{ backgroundColor: "#1e1e1e", height: "106px" }}
            >


                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant='subtitle1'
                        fontWeight="bold"
                        color="#fff"
                    >
                        {
                            snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)
                        }
                    </Typography>
                </Link>


                <Link to={snippet ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography
                        variant='subtitle2'
                        fontWeight="bold"
                        color="gray"
                    >
                        {
                            snippet?.channelTitle || demoChannelTitle
                        }
                        <CheckCircle sx={{fontSize:12,color:"gray",ml:"5px"}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
