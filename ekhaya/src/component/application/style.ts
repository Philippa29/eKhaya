import { createStyles } from "antd-style";

export const applicationStyles = createStyles(({ css }) => ({
  formContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  `,
  form: css`
    width: 400px;
  `,
  centeredFormItem: css`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  `,
  heading : css `
  text-align : center; 
  `
}));
