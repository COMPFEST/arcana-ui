import React from 'react';
import { GlobalStyles, css } from 'twin.macro';

import './fonts/styles.css';

export const GlobalStylesConfig: React.FC = () => {
    return (
        <GlobalStyles
            css={css`
                html {
                    scroll-behavior: smooth;
                }

                .body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
                        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }

                button {
                    cursor: pointer;
                }
                [role='button'] {
                    cursor: pointer;
                }

                button[type='button'] {
                    cursor: pointer;
                }

                button:focus {
                    outline: none !important;
                }

                h1,
                h2,
                h3,
                h4,
                h5 {
                    line-height: 1.25 rem;
                }
            `}
        />
    );
};
