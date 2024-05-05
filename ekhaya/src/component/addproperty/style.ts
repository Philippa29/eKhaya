import { createStyles } from "antd-style";

export const FormStyles = createStyles(({ css }) => ({
    container: css`
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
   
    
  `,
  formContainer: css`
    width: 80%; /* Adjust the width as needed */
    max-width: 800px; /* Set a maximum width to prevent it from becoming too wide */
    margin: 0 auto; /* Center the form horizontally */
  `,
  }));