export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" })
  }

export { wrapPageElement, wrapRootElement  } from './gatsby-browser'; 
