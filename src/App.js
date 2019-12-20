import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import client from './graphql';
import Navigation from './Navigation';
import Posts from './Posts';
import Following from './Following';
import Profile from './Profile';
import NewPost from './Post/New';

const authUrl = `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/auth/google`;

// this is a temporary user
// will eventually get it from backend after authentication
const currentUser = {
    username: 'jin_park',
};

// this is also a temporary function
// pretending to save a new comment in the backend
const saveNewComment = (comment) => console.log(comment);

function App() {

    console.log('authUrl', authUrl);

    const onNewComment = (payload) => {
        const comment = {
            ...payload,
            user: currentUser,
        };

        saveNewComment(comment);
    };

    const pages = [
        {
            route: '/',
            isExact: true,
            title: 'Posts',
            render: () => (<Posts onNewComment={onNewComment} />),
        },
        {
            route: '/following',
            isExact: false,
            title: 'Following',
            render: () => (<Following />),
        },
        {
            route: '/profile',
            isExact: false,
            title: 'Profile',
            render: () => (<Profile />),
        },
        {
            route: '/newpost',
            isExact: false,
            title: 'New Post',
            render: () => (<NewPost />),
        },
        {
            route: '/login',
            isExact: false,
            title: 'Login',
            render: () => (<Button href={authUrl}>Login with Google</Button>),
        },
    ];

    return (
        <ApolloProvider client={client}>
            <CssBaseline />
            <Container maxWidth="md">
                <Navigation pages={pages} />
            </Container>
        </ApolloProvider>
    );
}

export default App;
