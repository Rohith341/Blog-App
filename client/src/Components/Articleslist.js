import React, { useState, useEffect } from 'react';
import { axiosWithToken } from '../axiosWithToken';
import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ArticleCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Title = styled.h5`
  margin-bottom: 10px;
`;

const Content = styled.p`
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Footer = styled.div`
  padding: 10px;
  background-color: #f8f9fa;
`;

const LastUpdated = styled.small`
  color: #6c757d;
`;

function Articleslist() {
  const [articlesList, setArticlesList] = useState([]);
  const navigate = useNavigate();

  const getArticlesOfCurrentAuthor = async () => {
    try {
      const res = await axiosWithToken.get('http://localhost:4000/user-api/articles');
      setArticlesList(res.data.payload);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const readArticleByArticleId = (articleObj) => {
    navigate(`../article/${articleObj.articleId}`, { state: articleObj });
  };

  useEffect(() => {
    getArticlesOfCurrentAuthor();
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
        {articlesList.map((article) => (
          <div className="col" key={article.articleId}>
            <ArticleCard className="card h-100">
              <CardBody className="card-body">
                <Title className="card-title">{article.title}</Title>
                <Content className="card-text">{article.content.substring(0, 80) + '....'}</Content>
                <ReadMoreButton onClick={() => readArticleByArticleId(article)}>
                  Read More
                </ReadMoreButton>
              </CardBody>
              <Footer className="card-footer">
                <LastUpdated>Last updated on {article.dateOfModification}</LastUpdated>
              </Footer>
            </ArticleCard>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Articleslist;
