import { createStyles } from "antd-style";

export const leaseStyles = createStyles(({ css }) => ({
  container: css`
    margin: 0 auto;
    width: 50%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff; /* Change the background color as needed */
    border: 1px solid #ccc; /* Optional: Add border for visualization */
    border-radius: 8px; /* Optional: Add border radius for rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow for depth */

    @media screen and (max-width: 768px) {
      width: 90%;
      height: auto;
    }
  `,
  uploadButton: css`
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 10px;

    @media screen and (max-width: 768px) {
      position: static;
      margin-top: 20px;
    }
  `,
}));

export default leaseStyles;
