import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import { useForm } from "react-hook-form";


const styles = (theme) => ({
  description: {
    fontSize: '1.1rem',
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    marginTop: theme.spacing(2)
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: 400,
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://gustavogranato.activehosted.com/f/embed.php?id=5';
    script.async = true;

    document.body.appendChild(script);
  }, [])

  
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <img src={`${process.env.PUBLIC_URL}/images/logged_out/logo.png`} width={160}  alt="logo"/>
        </div>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      // height="100%"
                    >
                      <Hidden smUp >
                          <Grid item md={6} className={classes.flex}>
                            <img
                              src={`${process.env.PUBLIC_URL}/images/logged_out/mirella.jpg`}
                              className={classes.image}
                              style={{marginBottom: 20}}
                              alt="Mirella Dellazzari | E-book advento"
                            />
                          </Grid>
                        </Hidden>
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                            Inscrições encerradas
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                        
                          <Typography
                            variant={isWidthUp("lg", width) ? "h2" : "body1"}
                            color="textSecondary"
                            className={classes.description}
                          >
                             Increva-se na lista de espera para receber, em primeira mão, as
            novidades sobre o produto.
                            
                          </Typography>
                        </Box>
                        
                        <div className="_form_5" />
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6} className={classes.flex}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logged_out/mirella.jpg`}
                        className={classes.image}
                        alt="Mirella Dellazzari | E-book advento"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
