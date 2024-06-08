import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
  text-align: center;
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const HomeText = styled.h4`
  color: #333;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeImage
        src="https://www.shutterstock.com/image-photo/workspace-desk-keyboard-office-working-260nw-572386132.jpg"
        alt="BlogApp Banner"
      />
      <HomeText>
        BlogApp is a dynamic and versatile platform designed to empower users to create, share, and discover engaging content seamlessly. With an intuitive interface, BlogApp allows bloggers of all levels to craft visually appealing posts enriched with multimedia elements such as images, videos, and links. The platform supports a diverse range of topics, encouraging users to explore their interests and connect with like-minded individuals. Robust social features, including commenting, sharing, and following, foster a vibrant community and facilitate meaningful interactions. Additionally, advanced customization options and analytics tools enable users to personalize their blogs and track their performance, making BlogApp an ideal solution for both casual bloggers and professional content creators seeking to expand their reach and influence.
      </HomeText>
    </HomeContainer>
  );
}
