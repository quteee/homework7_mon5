import React from 'react';

function PostInfo({postMoreInfo}) {
  return (
    <div>
      <p>{postMoreInfo.id}</p>
      <p>{postMoreInfo.userId}</p>
      <p>{postMoreInfo.body}</p>
    </div>
  );
}

export default PostInfo;