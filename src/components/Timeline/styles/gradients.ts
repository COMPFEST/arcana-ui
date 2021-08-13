import tw, { css } from 'twin.macro';

const gradients = {
    textClip: css`
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    `,
    gradient1: css`
        background-image: linear-gradient(45deg, #f63247 0%, #dd549b 47.4%, #fee1af 100%);
    `,
    gradient2: css`
        background-image: linear-gradient(44.65deg, #ed1c7d 1.8%, #cd33d5 50.9%, #5824fe 100%);
    `,
    gradient4: css`
        background-image: linear-gradient(45deg, #f53b59 0%, #ec5f8a 49.48%, #ffeaab 100%);
    `,
    gradient6: css`
        background-image: linear-gradient(90deg, #67fbaf -5.26%, #4428fe 106.39%);
    `,
    itFacts: css`
        background: linear-gradient(42.86deg, #ed1c7d 1.78%, #cd33d5 25.42%, #5824fe 68.34%, #d5f6fd 101.11%);
    `,
    social: css`
        background: linear-gradient(45deg, #8d3bf5 0%, #5f8fec 49.48%, #abcdff 100%);
    `,
    post: css`
        background: linear-gradient(44.64deg, #14a470 1.8%, #29c7a1 51.69%, #34e6bb 97.59%);
    `,
    competition: css`
        background-image: linear-gradient(
            89.89deg,
            #f51c30 2.28%,
            #ff776d 68.3%,
            #ec6b67 79%,
            #ff6864 97.3%,
            #ff6da5 97.31%
        );
    `,
    academy: css`
        background-image: linear-gradient(180deg, #5977fd 29.8%, #401afc 56.13%, #abdafd 100%);
    `,
    academyCard: css`
        background: linear-gradient(224.48deg, #401afc 0.9%, #5977fd 29.8%, #abdafd 100%);
    `,
    competitionCard: css`
        background: linear-gradient(89.89deg, #f51c30 2.28%, #ff6864 37.03%, #ff776d 68.3%, #ff6da5 97.31%),
            linear-gradient(0deg, #c4c4c4, #c4c4c4);
    `,
};

export default gradients;
