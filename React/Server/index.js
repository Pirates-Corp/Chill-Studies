import express from "express";
import {
  ServerStyleSheets,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../Shared/Components/App";
import theme from "../Shared/Components/theme";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../Shared/Data/routes";

const router = express.Router();

router.use(express.static("dist"));

router.route("*").get((req, res, next) => {
  const sheets = new ServerStyleSheets();

  const activeRoute = routes.find(route => matchPath(req.url, route));

  const context = { ...activeRoute };

  const markup = renderToString(
    sheets.collect(
      <StaticRouter context={context} location={req.url}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StaticRouter>
    )
  );

  const css = sheets.toString();

  res.writeHead(200, { "Content-Type": "text/html" });
  res
    .end(
      `<!DOCTYPE html>
      <html lang='en'>
        <head>
          <title>ChillStudies</title>
          <style id='jss-server-side'>${css}</style>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
          <script>window.__initialData__ = ${serialize(
            JSON.stringify(activeRoute)
          )}</script>
        </head>
        <body>
          <div id='root'>${markup}</div>
          <script src="/client.js" async></script>
        </body>
      </html>
    `
    )
    .catch(next);
});

export default router;
