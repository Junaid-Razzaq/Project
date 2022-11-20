import { Button, Col, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { CloseCircleTwoTone, EditOutlined, FileTextTwoTone, PlusCircleTwoTone, StarTwoTone } from '@ant-design/icons'

const {Title} = Typography;
const Rightbar = () => {
  const [size, setsize] = useState('large')
  return (
   <>
   
    <Col span={14}>
        <div style={{marginTop: 40}}>
        
        <Title level={2}><FileTextTwoTone /> Summary <EditOutlined /></Title>
        <Title level={5}>To be a part of an organization where I can enhance and grow myself in the terms of knowledge,
          skills, attitude and put to an effective use of my analytical, logical and programming abilities.
          I aim to enhance and polish my skills in further computer Science progressing diverse fields.
          I am very Aimfull and Pationate about my work. Hope for the best.</Title>
        </div>
        <div style={{marginTop: 60}}>
        <Title level={2}> <StarTwoTone /> Skills</Title>
        </div>
        <div>
        <Button type="primary" shape="round" size={size}>
        User Interface Design <CloseCircleTwoTone />
      </Button> <Space />
      <Button type="primary" shape="round" size={size}>
        Web Design <CloseCircleTwoTone />
      </Button> <Space />
      <Button type="primary" shape="round" size={size}>
        Frontend <CloseCircleTwoTone />
      </Button> <Space />
      <Button type="primary" shape="round" size={size}>
        Managment <CloseCircleTwoTone />
      </Button>
      </div>
      <div style={{marginTop: 25}}>
      <Button type="primary" shape="round" size={size}>
        Marketing <CloseCircleTwoTone />
      </Button> <Space />
      <Button type="primary" shape="round" size={size}>
        English <CloseCircleTwoTone />
      </Button> <Space />
      <Button type="text" style={{fontsize: '200px'}} icon={<PlusCircleTwoTone />} />
     </div>
    </Col>
    </>
  )
}

export default Rightbar