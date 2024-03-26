import React, { useState, useEffect } from 'react';
import { Container, Spinner, Alert, ListGroup } from 'react-bootstrap';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchTopic = 'React'; // Pre-set topic

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTopic}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.hits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchTopic]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h1>News about {searchTopic}</h1>
      <ListGroup>
        {articles.map(article => (
          <ListGroup.Item key={article.objectID}>
            <a href={article.url}>{article.title}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default NewsApp;
