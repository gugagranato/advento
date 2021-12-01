import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  TextField
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import { useForm } from "react-hook-form";
import axios from 'axios'


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
    maxWidth: "100%",
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
    display: 'flex'
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const id = '_form1_'
  // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://gustavogranato.activehosted.com/f/embed.php?id=1';
    script.async = true;

    document.body.appendChild(script);
  }, [])

  const onSubmit = async (data) => {
    const params = {
      u: "1",
      f: "1",
      s: "",
      c: "0",
      m: "0",
      act: "sub",
      v: "2",
      or: "b5b82f87de3111a61d0d3ea55d620e82",
      email: data.email
    }
    const id = '_form_1_'
    // const url = `https://gustavogranato.activehosted.com/proc.php?u=${id}&f=${id}&s=&c=0&m=0&act=sub&v=2&email=${data.email}&jsonp=true`;

    const url = 'https://gustavogranato.activehosted.com/proc.php'
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    try {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(params) // body data type must match "Content-Type" header
      }).then(res => console.log(res, 'res')).catch(err => console.error(err, 'erro no catch'))
      console.log(response, 'Response')
      
    } catch (error) {
      console.log(error, 'errro trycath')
    }
  }
  console.log(watch("email"));
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
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
                      height="100%"
                    >
                      <Hidden smUp>
                          <Grid item md={6} className={classes.flex}>
                            <img
                              src={`${process.env.PUBLIC_URL}/images/logged_out/advento2.svg`}
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
                            Inscreva-se para receber seu e-book do advento
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                        
                          <Typography
                            variant={isWidthUp("lg", width) ? "h2" : "body1"}
                            color="textSecondary"
                            className={classes.description}
                          >
                            Trouxemos 4 poemas e algumas poemas de exercícios para ser usados no tempo do advento.
                            É possível trabalhar gramática, leitura em voz alta, interpretação de texto.
                            São leituras simples para todas as idades, incluindo adultos.
                            Deus deu aos pais a jurisdição sobre a educação dos filhos. 
                            Nesse tempo propício do advento, como preparação para a chegada do Menino Deus, o estudo em família pode ser muito frutuoso!
                            Aproveite bem o momento.
                          </Typography>
                        </Box>
                        
                        <div className="_form_1" />
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6} className={classes.flex}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logged_out/advento2.svg`}
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
