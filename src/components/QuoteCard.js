import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import { IconBrandTwitter, IconQuote } from "@tabler/icons-react";

const QuoteCard = ({ quote, author, color, handleNewQuote }) => {
  return (
    <Card
      id="quote-box"
      data-testid="quote-box"
      style={{ width: "30rem", border: "none", color }}
    >
      <Card.Body>
        <figure>
          <blockquote id="text" className="blockquote">
            <IconQuote stroke={1.5} size="3.5rem" />
            <p>{quote}</p>
          </blockquote>
          <figcaption
            id="author"
            className="blockquote-footer text-end"
            style={{ color }}
          >
            {author}
          </figcaption>
        </figure>

        <Stack direction="horizontal" gap={3}>
          <Button
            size="sm"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: color, borderColor: color }}
          >
            <IconBrandTwitter
              stroke={1.5}
              size="1.3rem"
              className="text-white"
            />
          </Button>
          <Button
            size="sm"
            id="new-quote"
            onClick={handleNewQuote}
            className="ms-auto"
            style={{ backgroundColor: color, borderColor: color }}
          >
            New Quote
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;
