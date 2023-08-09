import React from 'react';
import {Spinner, Button} from "react-bootstrap";

function PostSpinner() {
  return (
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
  </Button>

  );
}

export default PostSpinner;