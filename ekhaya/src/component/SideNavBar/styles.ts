import { createStyles } from "antd-style";
export const dashStyles = createStyles(({ css }) => ({
  container: css`
    display: flex;
    flex-direction: column;
    position: relative;
    background: #e4e2e6;
    overflow-x: auto;
    width: 200px;
    height: 90vh; /* Set the container height to fill the viewport */
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
    background: #e4e2e6;
    position: sticky;
    top: 0;
    left: 0;
    height: 100%; /* Set the sidebar height to fill the container */
    width: 200px;
    z-index: 99;
    overflow-y: auto; /* Enable vertical scrolling for the sidebar */
  `,
  layout: css`
    position: relative;
    min-height: calc(100vh - 80px); /* Adjust height as needed */
    flex: 1;
    margin-left: 200px;
    height: 100%;
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
      background-color: #2596be !important;
      color: #ffffff !important;
    }
  `,
}));
