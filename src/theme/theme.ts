"use client";
import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: config.initialColorMode }),
  {
    config,
    styles: {
      global: {
        body: {
          bg: "white",
          color: "gray.primaryText.light",
        },
      },
      colors: {
        primary: {
          accent: "#0F89D3",
          main: "#fff",
          primaryText: "#252525",
          secondaryText: "",
        },
      },
    },
  },

  {
    semanticTokens: {
    //   colors: semanticColors,
    },
  }
);
