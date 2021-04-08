import React from 'react';
import { GlobalStylesConfig } from "../src/config/global.styles"

// Global decorators to apply styles to all stories 
export const decorators = [
  Story => (
    <>
    <GlobalStylesConfig />
    <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}