import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { featchFromApi } from "../utils/featchFromApi";
import {Videos,ChannelCard} from './index';

const ChannleDetail = () => {

  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState(null)
  const {id} = useParams();

// console.log(channelDetail?.snippet?.thumbnails?.high?.url)
  useEffect(()=>{
    featchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))

    featchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
        style={{
          background:'linear-gradient(90deg, rgba(0,0,0,1) 2%, rgba(121,43,9,0.896796218487395) 46%, rgba(0,0,0,1) 100%)',
          zIndex:10,
          height:'300px',
          background: "url(https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0x00ffffff-no-rj)",
    backgroundSize: "contain",
    backgroundPosition: "center",
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-130px"/>
      </Box>
      <Box display='flex' p="2">
        <Box sx={{mr:{ sm: "100px"} }}/>
          <Videos videos={videos}/>
      </Box>
  
    </Box>
  )
}

export default ChannleDetail
