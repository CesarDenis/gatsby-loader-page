import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #loading {
                background: white;
                position: absolute;
                width: 100%;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 9999;
              }


              #loading > div {
                display: inline-block;
                width: 30px;
                height: 30px;
                border: 2px solid rgba(100, 100, 100, 0.2);
                border-radius: 50%;
                border-top-color: rgba(100, 100, 100, 0.7);
                animation: spin 1s ease-in-out infinite;
                -webkit-animation: spin 1s ease-in-out infinite;
                left: calc(50% - 15px);
                top: calc(50% - 15px);
                position: fixed;
                z-index: 1;
              }

              @keyframes spin {
                to {
                  -webkit-transform: rotate(360deg);
                }
              }
              @-webkit-keyframes spin {
                to {
                  -webkit-transform: rotate(360deg);
                }
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function(event) {
                document.getElementById("loading").style.display = 'none';
              })
            `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div id="loading"><div></div></div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
