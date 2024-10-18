import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function PaginationRounded({ count, page, onChange }) {
  const { isDarkMode } = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light", // Toggle between dark and light modes
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={count} // Total number of pages
          page={page} // Current page
          onChange={onChange} // Page change handler
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Stack>
    </ThemeProvider>
  );
}
