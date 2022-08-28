import { Box, Stack } from "@mui/material";
import {VideoCard,ChannelCard} from "./index";


const Videos = ({ videos,direction }) => {

    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            gap={2}
        >
            {
               videos && videos.map((items, index) => {
                    return (<Box key={index}>
                            {items.id.videoId  && <VideoCard video={items}/>}
                            {items.id.channelId  && <ChannelCard channelDetail={items}/>}
                    </Box>)
                })
            }

        </Stack>
    )
}

export default Videos
