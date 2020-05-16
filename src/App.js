import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './App.css';
import * as randomWords from 'random-words';

const colorList = [
  'red', 'pink', 'purple', 'indigo', 'blue',
  'cyan', 'lime', 'green', 'orange', 'brown', 'black'
];

function App() {

  const totalBoxes = 12;
  const boxPerLine = 4;

  const d = [];
  for (let i = 0; i < 12; i++) {
    d[i] = {
      word: randomWords(),
      color: colorList[parseInt(Math.random() * 10)],
      // index
    }
  }

  // xs is total boxes and sm is boxes per row
  const innerGrid = (obj, key) => {
    const { word, color } = obj;
    console.log(12, obj)
    return <Grid key={key} item xs={totalBoxes} sm={boxPerLine}>
      <Box bgcolor={color} color="black" p={3}>
        {word}
      </Box>
    </Grid>;
  }

  return (
    <Grid container spacing={2}>
      {d.map(innerGrid)}
    </Grid>
  );
}

export default App;
