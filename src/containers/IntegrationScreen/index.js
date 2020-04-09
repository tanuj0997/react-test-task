import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { cardClicked } from './reducer';
import Loader from '../../components/Loader';
import { getNumberArray } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2),
  },
  gridListTile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootCard: {
    width: 150,
    height: 150,
  },
  media: {
    height: 140,
  },
  actionArea: {
    height: '100%',
    display: 'flex',
  }
}));

const IntegrationScreen = ({ loading, cardClicked }) => {
  const classes = useStyles();

  const [ elements, increaseElements ] = useState(getNumberArray(12))

  const handleScroll = (event) => {
    const target = event.target;

    if(target.scrollHeight - target.scrollTop === target.clientHeight) {
      const newLength = elements.length + 3;
      const newArray = getNumberArray(newLength);
      increaseElements(newArray);
    }
  }

  return (
    <div className={classes.root} onScroll={handleScroll}>
      <Loader loading={loading}/>
      <GridList cols={3}>
        {elements.map((element) => (
          <GridListTile key={element} cols={1} classes={{ root: classes.gridListTile, tile: classes.gridListTile }}>
            <Card className={classes.rootCard} variant="outlined">
              <CardActionArea className={classes.actionArea} onClick={() => cardClicked(element)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`API ${element}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

IntegrationScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  cardClicked: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.integration.loading,
});

const mapDispatchToProps = { cardClicked };

export default connect(mapStateToProps, mapDispatchToProps)(IntegrationScreen);
