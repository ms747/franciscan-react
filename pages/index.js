import React from 'react'
import Card, { CardMedia, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button'
import Layout from '../components/Layout'
import Grid from 'material-ui/Grid'
import withRoot from '../components/withRoot'

const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundImage: 'url(https://unsplash.it/1200/800?image=1062)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    flexDirection: 'column'
  },
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280
  },
  heroCards: {
    padding: '3rem',
    display: 'flex',
    justifyContent: 'center'
  }
})

const IndexPage = ({ classes }) => (
  <Layout>
    <div className={classes.parallax}>
      <Typography type="display2" className={classes.white} gutterBottom>
        Franciscan University of Steubenville
      </Typography>
      <Typography type="subheading" className={classes.white} gutterBottom>
        Add your own text and images for a quick one page site.
      </Typography>

      <Button color="accent" raised style={{ margin: '10px' }}>
        CALL TO AUDIO
      </Button>
      <Grid item container justify="center" xs={6} md={12}>
        <Button color="accent" raised style={{ margin: '10px' }}>
          CALL TO AUDIO
        </Button>
        <Button color="accent" raised style={{ margin: '10px' }}>
          CALL TO AUDIO
        </Button>
      </Grid>
    </div>
    <div className={classes.heroCards}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
            <CardActions>
              <Typography type="subheading" gutterBottom>
                Austria
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/mission3-400w.jpg"
              title="Contemplative Reptile"
            />
            <CardActions>
              <Typography type="subheading" gutterBottom>
                Austria
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
