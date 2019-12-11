import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import LinkTab from './LinkTab';
import TabPanel from './TabPanel';
import Posts from '../Posts';
import Following from '../Following';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Posts" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="Following" href="/trash" {...a11yProps(1)} />
                    <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Posts />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Following />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel>
        </div>
    );
}

export default Navigation;
