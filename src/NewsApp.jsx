import React, { useState, useEffect } from 'react';
import { Container, Spinner, Alert, ListGroup, Navbar, Nav } from 'react-bootstrap';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchTopic = 'React';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTopic}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        const articlesWithComments = data.hits.map(hit => ({
          id: hit.objectID,
          title: hit.title,
          url: hit.url,
          timestamp: formatDate(hit.created_at_i),
          author: hit.author,
          num_comments: hit.num_comments || 0
        }));
        setArticles(articlesWithComments);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchTopic]);

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return `${date.getDate()}${getOrdinalSuffix(date.getDate())} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  };

  const getOrdinalSuffix = (date) => {
    const j = date % 10, k = date % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
  };

  if (loading) {
    return <Container className="text-center mt-5"><Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner></Container>;
  }

  if (error) {
    return <Container className="mt-5"><Alert variant="danger">Error: {error}</Alert></Container>;
  }

  const Footer = () => (
    <div id="footerEnd">
    <Navbar fixed="bottom" bg="light" style={{ width: '100%', justifyContent: 'center' }}>
      <Container style={{ display: 'flex', justifyContent: 'center', maxWidth: '600px' }}>
        <Nav className="flex-row align-items-center" style={{ gap: '1rem' }}>
          <Nav.Link href="/contact" style={{ padding: '0 1rem' }}>Contact</Nav.Link>

          {/* Placeholder for the source image. Adjust as needed. */}
          <img src="data:image/png;base64,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" alt="Source" style={{ width: '40px', height: '40px' }} />
          <Nav.Link href="/faq" style={{ padding: '0 1rem' }}>FAQ</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );

  return (
    <Container className="mt-5 mb-5">
      <h1>News about {searchTopic}</h1>
      <ListGroup>
        {articles.map(article => (
          <ListGroup.Item key={article.id} className="d-flex justify-content-between align-items-start">
            <div className="flex-fill">
              <a href={article.url}>{article.title}</a>
            </div>
            <div className="ms-3">
              <p>Author: {article.author}</p>
              <p>Comments: {article.num_comments}</p>
              <p>Date: {article.timestamp}</p>
              <hr></hr>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Footer />
    </Container>
  );
};

export default NewsApp;
