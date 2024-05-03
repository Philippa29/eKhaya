import { createStyles } from "antd-style";


export const landingPageStyle = createStyles(({ css }) => ({
  body : css`
  background-color: #e4e2e6;
  `,
    card: css`
    background-color: #e4e2e6;
    width: 50%;

    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,
  cardContent: css`
    display: flex;
    flex-direction: row;
    
    align-items: center; /* Align items vertically center */
  `,
  imageContainer: css`
    width: 50%;
    height: 75%;
    flex: 1;
  `,
  textContainer: css`
    flex: 2;
    padding-left: 20px;
  `,
}));