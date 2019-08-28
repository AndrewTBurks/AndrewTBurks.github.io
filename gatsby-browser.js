/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React, { useState } from "react"
import ThemeProvider from "./src/components/theme-context";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

