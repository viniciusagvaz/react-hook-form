import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { Footer } from "./components/common/Footer";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};
