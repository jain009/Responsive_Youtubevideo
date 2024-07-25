import { Card, Tabs } from 'antd';
import React from 'react';
import YouTube from 'react-youtube';
import './Projects.css'; // Ensure to create and style the CSS file

import ProjectController from './project/ProjectController';

const { TabPane } = Tabs;
const projects = {
  "3-5": {
    doYouKnow: [
      { videoId: "geqjpJjMGgA", title: "Do You Know Project 1" },
      { videoId: "34u80P9p_pQ", title: "Do You Know Project 2" }
    ],
    amazing: [
      { videoId: "SInyKTaiOIk", title: "Amazing Project 1" },
      { videoId: "def457", title: "Amazing Project 2" }
    ],
    tipsAndTricks: [
      { videoId: "ghi789", title: "Tips and Tricks Project 1" },
      { videoId: "ghi790", title: "Tips and Tricks Project 2" }
    ],
    competitionPrep: [
      { videoId: "jkl012", title: "Competition Prep Project 1" },
      { videoId: "jkl013", title: "Competition Prep Project 2" }
    ],
    jarahatKe: [
      { videoId: "mno345", title: "Jarahat Ke Project 1" },
      { videoId: "mno346", title: "Jarahat Ke Project 2" }
    ]
  },
  "6-8": {
    doYouKnow: [
      { videoId: "pqr678", title: "Do You Know Project 3" },
      { videoId: "pqr679", title: "Do You Know Project 4" }
    ],
    amazing: [
      { videoId: "stu910", title: "Amazing Project 3" },
      { videoId: "stu911", title: "Amazing Project 4" }
    ],
    tipsAndTricks: [
      { videoId: "vwx112", title: "Tips and Tricks Project 3" },
      { videoId: "vwx113", title: "Tips and Tricks Project 4" }
    ],
    competitionPrep: [
      { videoId: "yz114", title: "Competition Prep Project 3" },
      { videoId: "yz115", title: "Competition Prep Project 4" }
    ],
    jarahatKe: [
      { videoId: "abc678", title: "Jarahat Ke Project 3" },
      { videoId: "abc679", title: "Jarahat Ke Project 4" }
    ]
  },
  "9-12": {
    doYouKnow: [
      { videoId: "def123", title: "Do You Know Project 5" },
      { videoId: "def124", title: "Do You Know Project 6" }
    ],
    amazing: [
      { videoId: "ghi345", title: "Amazing Project 5" },
      { videoId: "ghi346", title: "Amazing Project 6" }
    ],
    tipsAndTricks: [
      { videoId: "jkl567", title: "Tips and Tricks Project 5" },
      { videoId: "jkl568", title: "Tips and Tricks Project 6" }
    ],
    competitionPrep: [
      { videoId: "mno789", title: "Competition Prep Project 5" },
      { videoId: "mno790", title: "Competition Prep Project 6" }
    ],
    jarahatKe: [
      { videoId: "pqr901", title: "Jarahat Ke Project 5" },
      { videoId: "pqr902", title: "Jarahat Ke Project 6" }
    ]
  }
};

const Projects = () => {
  const renderVideos = (videos) => {
    return videos.map((video) => (
      <Card
        key={video.videoId}
        cover={<img alt={video.title} src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`} />}
        style={{ marginBottom: 16 }}
      >
        <YouTube videoId={video.videoId} opts={{ width: '100%', height: '300px' }} />
        <Card.Meta title={video.title} />
      </Card>
    ));
  };

  const renderTabs = () => {
    return Object.keys(projects).map((ageGroup) => (
      <TabPane tab={`Age ${ageGroup}`} key={ageGroup}>
        <ProjectController agegroup={ageGroup} data={projects[ageGroup]} />
       
      </TabPane>
    ));
  };

  return (
    <div className="projects-container">
      <Tabs defaultActiveKey="1">
        {renderTabs()}
      </Tabs>
    </div>
  );
};

export default Projects;
