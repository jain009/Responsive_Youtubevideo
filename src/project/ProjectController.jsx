import React, { useState } from 'react';
import { Card, Segmented, Row, Col, Button, Carousel } from 'antd';
import YouTube from 'react-youtube';
import {
    VideoCameraOutlined,
    BulbOutlined,
    ToolOutlined,
    QuestionCircleOutlined,
    TrophyOutlined,
    HeartOutlined
} from '@ant-design/icons';
import T20Quiz from '../quizs/T20Quiz'; // Ensure to import the T20Quiz component
import './ProjectController.css'; // Create and style the CSS file

const ProjectController = ({ agegroup, data }) => {
    const [currentTab, setCurrentTab] = useState('Videos');
    const [currentVideo, setCurrentVideo] = useState(null); // State to manage current video to play

    const renderThumbnails = (videos) => (
        <div className="thumbnail-list">
            {videos.map((video) => (
                <div key={video.videoId} className="thumbnail-item" onClick={() => setCurrentVideo(video.videoId)}>
                    <img
                        className="thumbnail-img"
                        alt={video.title}
                        src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                    />
                    <div className="video-title">{video.title}</div>
                </div>
            ))}
        </div>
    );

    const categorizedVideos = {
        doYouKnow: data.doYouKnow || [],
        amazing: data.amazing || [],
        tipsAndTricks: data.tipsAndTricks || [],
        competitionPrep: data.competitionPrep || [],
        jarahatKe: data.jarahatKe || []
    };

    return (
        <div className="project-controller">
            <Segmented
                options={[
                    { label: 'Videos', value: 'Videos', icon: <VideoCameraOutlined /> },
               
                ]}
                value={currentTab}
                onChange={setCurrentTab}
                className="segmented-control"
            />
            <div className="content-section">
                {currentTab === 'Videos' && (
                    <div className="video-carousels">
                        {Object.entries(categorizedVideos).map(([category, videos]) => {
                            console.log("Harish Category",category)
                           return  <div key={category} className="carousel-section">
                                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                                <Carousel autoplay>
                                    {renderThumbnails(videos)}
                                </Carousel>
                                {currentVideo && (
                                    <div className="video-player">
                                        <YouTube videoId={currentVideo} opts={{ width: '100%', height: '400px' }} />
                                    </div>
                                )}
                            </div>
})}
                    </div>
                )}
                {currentTab === 'Creativity' && (
                    <div className="flex-container">
                        <Row gutter={[16, 16]} justify="center">
                            <Col>
                                <Button className="custom-button" type="default" icon={<QuestionCircleOutlined />} onClick={() => setCurrentTab('T20Quiz')}>T20 Quiz</Button>
                            </Col>
                          
                        </Row>
                    </div>
                )}
                {currentTab === 'DIY' && (
                    <div className="diy-section">
                        <h3>DIY Projects for Age Group {agegroup}</h3>
                    </div>
                )}
                {currentTab === 'T20Quiz' && (
                    <div className="quiz-section">
                        <T20Quiz />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectController;
