import React, { useEffect, useState } from 'react';
import { Layout, List, Typography, Card } from 'antd';


const { Content, Sider } = Layout;
const { Text } = Typography;

const videoData = [
  {
    id: 'tgbNymZ7vqY',
    title: 'Video 1',
    thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg'
  },
  {
    id: 'v2LXyo-FN9o',
    title: 'Video 2',
    thumbnail: 'https://img.youtube.com/vi/v2LXyo-FN9o/0.jpg'
  },
  {
    id: '3JZ_D3ELwOQ',
    title: 'Video 3',
    thumbnail: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg'
  },
  {
    id: 'M7lc1UVf-VE',
    title: 'Video 4',
    thumbnail: 'https://img.youtube.com/vi/M7lc1UVf-VE/0.jpg'
  },
  {
    id: 'sBws8MSXN7A',
    title: 'Video 5',
    thumbnail: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg'
  },
  {
    id: 'ScMzIvxBSi4',
    title: 'Video 6',
    thumbnail: 'https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg'
  },
  {
    id: 'e-ORhEE9VVg',
    title: 'Video 7',
    thumbnail: 'https://img.youtube.com/vi/e-ORhEE9VVg/0.jpg'
  },
  {
    id: 'lWA2pjMjpBs',
    title: 'Video 8',
    thumbnail: 'https://img.youtube.com/vi/lWA2pjMjpBs/0.jpg'
  },
  {
    id: 'OpQFFLBMEPI',
    title: 'Video 9',
    thumbnail: 'https://img.youtube.com/vi/OpQFFLBMEPI/0.jpg'
  },
  {
    id: '9bZkp7q19f0',
    title: 'Video 10',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/0.jpg'
  }
];


const YoutubePlayerComp = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0].id);
  const [showBottomMenu, setShowBottomMenu] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 464) {
      setShowBottomMenu(true)
    } 
     if (window.innerWidth >= 464) {
      setShowBottomMenu(false)
    }
  }, [window.innerWidth])

  const handleVideoChange = (id) => {
    setSelectedVideo(id);
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Content>
        <div className="video-player">
          <iframe
            id="main-video"
            height="500px"
            width="100%"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allowFullScreen
            title="Main Video"
          ></iframe>
        </div>
        {showBottomMenu && <List
          // grid={{ gutter: 16, column: 1 }}
          dataSource={videoData}
          renderItem={item => (
            <List.Item onClick={() => handleVideoChange(item.id)} className="thumbnail">
              <Card hoverable cover={<img alt={item.title} src={item.thumbnail} />}>
                <Card.Meta title={item.title} />
              </Card>
            </List.Item>
          )}
        />}
      </Content>
      {
        !showBottomMenu && <Sider width="300px" className="video-list" breakpoint="lg" collapsedWidth="0">
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={videoData}
            renderItem={item => (
              <List.Item onClick={() => handleVideoChange(item.id)} className="thumbnail">
                <Card hoverable cover={<img alt={item.title} src={item.thumbnail} />}>
                  <Card.Meta title={item.title} />
                </Card>
              </List.Item>
            )}
          />
        </Sider>
      }
    </Layout>
  );
};

export default YoutubePlayerComp;
