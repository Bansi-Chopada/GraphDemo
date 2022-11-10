import { createTheme, Grid, ThemeProvider } from '@mui/material';
import './App.css';
import { Dashboard } from './Pages/Dashboard/Dashboard';
// import { CompPieChart } from './Components/Charts/PieChart';

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 800,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
