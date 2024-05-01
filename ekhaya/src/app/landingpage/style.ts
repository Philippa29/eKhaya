import { createStyles } from "antd-style";


export const landingPageStyle = createStyles(({ css }) => ({
    card: css`
    width: 80%;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,
  cardContent: css`
    display: flex;
    flex-direction: row;
    align-items: center; /* Align items vertically center */
  `,
  imageContainer: css`
    flex: 1;
  `,
  textContainer: css`
    flex: 2;
    padding-left: 20px;
  `,
}));