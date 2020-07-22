import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayCircleFilledRounded';

//instead of making dummy db to fetch from:
const dummy = {
  '@Clara': ['Super by Coolsong', 'yaaay this song is cool', '#ab123f'],
  '@Jone': ['Super by Coolsong', '   yaaay this song is cool', '#3A243B'],
  '@Dave': ['Super by Coolsong', 'yaaay this song is cool', '#a2e61d'],
  '@Mia': ['Super by Coolsong', 'yaaay this song is cool', '#0a0a0a'],
  '@Owen': ['Super by Coolsong', 'yaaay this song is cool', '#00a0a0'],
  '@Alana': ['Super by Coolsong', 'yaaay this song is cool', '#cc66ff'],
  '@Adam': ['Super by Coolsong', 'yaaay this song is cool', '#131e3a'],
  '@Kaitrin': ['Super by Coolsong', 'yaaay this song is cool', '#8d021f'],
  '@Jona': ['Super by Coolsong', 'yaaay this song is cool', '#B1560f'],
  '@Eric': ['Super by Coolsong', 'yaaay this song is cool', '#01796f'],
  '@Sam': ['Super by Coolsong', 'yaaay this song is cool', '#598baf'],
  '@Lenny': ['Super by Coolsong', 'yaaay this song is cool', '#ffd300'],
  '@Andrew': ['Super by Coolsong', 'yaaay this song is cool', '#000020'],
  '@Mackenzie': ['Super by Coolsong', 'yaaay this song is cool', '#ff00ff'],
  '@Ally': ['Super by Coolsong', 'yaaay this song is cool', '#960019'],
  '@Luke': ['Super by Coolsong', 'yaaay this song is cool', '#165009'],
  '@Gaby': ['Super by Coolsong', 'yaaay this song is cool', '#997950'],
  '@Harrisson': ['Super by Coolsong', 'yaaay this song is cool', '#66ffcc'],
  '@Grace': ['Super by Coolsong', 'yaaay this song is cool', '#abcced'],
  '@Clay': ['Super by Coolsong', 'yaaay this song is cool', '#957dad'],
  '@Christina': ['Super by Coolsong', 'yaaay this song is cool', '#ccaaee'],
  '@Jenny': ['Super by Coolsong', 'yaaay this song is cool', '#990000'],
  '@Erika': ['Super by Coolsong', 'yaaay this song is cool', '#003333'],
  '@Akio': ['Super by Coolsong', 'yaaay this song is cool', '#663333'],
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
export default function Subs() {
  const classes = useStyles();
  const spacing = 2;
  return (
    <Container maxWidth='md' style={{ paddingTop: '8px' }}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={spacing}>
            {Object.keys(dummy).map((key) => (
              <Grid key={key} item>
                <Paper
                  className={classes.paper}
                  style={
                    dummy[key][2]
                      ? {
                          background: `linear-gradient( #303030, ${dummy[key][2]} )`,
                        }
                      : { background: '#343434' }
                  }
                >
                  <h3 style={{ padding: '12px', margin: '0px' }}>{key}</h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p>{dummy[key][0]}</p>
                    <div>
                      <PlayIcon style={{ fontSize: 55 }} />
                    </div>
                    <span
                      style={{
                        //background: 'rgba(52, 52, 52, 0.7)',
                        borderRadius: '16px',
                        padding: '2px',
                        paddingLeft: '3px',
                        paddingRight: '3px',
                        margin: '2px',
                      }}
                    >
                      {dummy[key][1]}
                    </span>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

// {Object.keys(dummy).map((key) => {
//     return (
//       <Paper
//         component='div'
//         width='80px'
//         height='100px'
//         key={key}
//         backgroundcolor='#7CEDA1'
//       >
//         <Typography key={key}>
//           {dummy[key].map((el) => {
//             el;
//           })}
//         </Typography>
//       </Paper>
//     );
//   })}
