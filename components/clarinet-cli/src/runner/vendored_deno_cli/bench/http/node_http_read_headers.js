// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
const http = require("http");
const port = process.argv[2] || "4544";
console.log("port", port);
http
  .Server((req, res) => {
    const bar = req.headers["foo"];
    res.end(bar);
  })
  .listen(port);
