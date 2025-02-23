import React from 'react';
import { CommentBox } from './CommentBox';

const data = [
  {
    user: 'Arun',
    comment: 'Lorem ipsam',
    replies: [
      { user: 'Akhil', comment: 'Lorem ips', replies: [] },
      {
        user: 'Akhil',
        comment: 'Lorem ips',
        replies: [
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: [
              { user: 'Akhil', comment: 'Lorem ips', replies: [] },
              { user: 'Akhil', comment: 'Lorem ips', replies: [] },
              { user: 'Akhil', comment: 'Lorem ips', replies: [] }
            ]
          }
        ]
      },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] }
    ]
  },
  {
    user: 'Arun',
    comment: 'Lorem ipsam',
    replies: [
      {
        user: 'Akhil',
        comment: 'Lorem ips',
        replies: [
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: [
              { user: 'Akhil', comment: 'Lorem ips', replies: [] },
              { user: 'Akhil', comment: 'Lorem ips', replies: [] },
              { user: 'Akhil', comment: 'Lorem ips', replies: [] }
            ]
          }
        ]
      },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] }
    ]
  },
  {
    user: 'Arun',
    comment: 'Lorem ipsam',
    replies: [
      {
        user: 'Akhil',
        comment: 'Lorem ips',
        replies: [
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: []
          },
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: []
          },
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: []
          },
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: []
          },
          {
            user: 'Arun',
            comment: 'Lorem ipsam',
            replies: []
          }
        ]
      },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] }
    ]
  },
  {
    user: 'Arun',
    comment: 'Lorem ipsam',
    replies: [
      { user: 'Akhil', comment: 'Lorem ips', replies: [] },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] },
      { user: 'Akhil', comment: 'Lorem ips', replies: [] }
    ]
  }
];
export const NestedComments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};
