import { createStyles } from "antd-style";


export const dashStyles = createStyles(({ css }) => ({
  container: css`
    display: flex;
    flex-direction: column;
    position: relative;
    background: #e4e2e6;
    height: 160vh; 
    overflow-x: auto;
  `,
  logoContainer: css`
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e4e2e6;
  `,
  sidebar: css`
    background-color: black;
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh; /* Set the height to 100vh to make it full height */
    width: 200px;
    z-index: 99;
    overflow-y: auto; /* Enable vertical scrolling for the sidebar */
  `,
  layout: css`
    position: relative;
    min-height: 90vh;
    flex: 1;
    margin-left: 200px;
  `,
  logo: css`
    max-width: 80%;
    max-height: 80%;
    width: auto;
    height: auto;
  `,
  header: css`
    padding: 0;
    background-color: purple;
  `,
  h1: css`
    padding-bottom: 20px; 
  `,
  content: css`
    margin: 0 16px;
  `,
  menuItemHover: css`
    &:hover {
      background-color: #2596be!important;
      color: #ffffff !important;
    }
  `,
}));



  
  // Override Ant Design colors using CSS variables
 
  
  