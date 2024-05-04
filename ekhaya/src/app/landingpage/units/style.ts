import { createStyles } from 'antd-style';

export const unitsPageStyle = createStyles(({ css }) => ({
  container: css`
    padding: 20px; /* Adjust padding as needed */
  `,
  card: css`
    width: 500px; /* Set the width of the card */
    margin: 20px auto; /* Center the card horizontally with some margin */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Apply box shadow */
  `,
  carousel: css`
    text-align: center; /* Center align the carousel content */
  `,
  unitDetails: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
}));
