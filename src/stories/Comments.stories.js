import React from 'react';
import { range, sortBy } from 'lodash';
import * as faker from 'faker';
import Comments from '../Post/Comments';

export default {
    title: 'Comments',
};

const buildComments = (numberOfComments) => range(0, numberOfComments).map(() => (
    {
        user: {
            ...faker.helpers.userCard(),
            avatar: faker.image.avatar(),
        },
        comment: faker.lorem.paragraph(),
        date: faker.date.past(),
    }
));

const comments = sortBy(buildComments(5), (comment) => comment.date);

export const defaultRendering = () => <Comments comments={comments} />;
export const noCommentsRendering = () => <Comments comments={[]} />;
