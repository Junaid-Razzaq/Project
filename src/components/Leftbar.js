import { Avatar, Col, Typography} from 'antd'
import React from 'react'
import Image from './Images/river.webp' 
import IImage from './Images/jd.jpeg'
import { CheckCircleTwoTone, FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'



const { Title } = Typography;
const Leftbar = () => {
  return (
    <>
    
      <Col span={10}>
       <div style={{position: 'absolute' }}>
         <img style={{height: 150, width: 500, borderRadius:'7px'}} src={Image}alt='' /></div>
         <div style={{position: 'relative', marginTop:70, left: 160}}>
         <Avatar style={{height: 180, width: 180}} src={IImage}></Avatar>
         </div>
         <div style={{marginTop: 20}}>
         <Title style={{marginLeft: '150px'}} level={3} >Junaid Razzaq <CheckCircleTwoTone /></Title>
         <Title style={{marginLeft: '125px'}} level={5} >Manager Tech Development <CheckCircleTwoTone /></Title>
         <Title style={{marginLeft: '100px'}}level={5} >@Wise Solution | Monetral, Canada <CheckCircleTwoTone /></Title>
         </div>
         <div style={{color: 'Brown', marginLeft: '150px', fontSize:'30px'}} >
          <LinkedinFilled /> <FacebookFilled /> <TwitterCircleFilled /> <InstagramFilled /> </div>
        
    </Col>
    
    </>
  )
}

export default Leftbar