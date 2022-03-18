var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var import_path = __toESM(require("path"));
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");
const app = (0, import_express.default)();
app.use((req, res, next) => {
  var _a, _b;
  res.set("x-fly-region", (_a = process.env.FLY_REGION) != null ? _a : "unknown");
  res.set("Strict-Transport-Security", `max-age=${60 * 60 * 24 * 365 * 100}`);
  const proto = req.get("X-Forwarded-Proto");
  const host = (_b = req.get("X-Forwarded-Host")) != null ? _b : req.get("host");
  if (proto === "http") {
    res.set("X-Forwarded-Proto", "https");
    res.redirect(`https://${host}${req.originalUrl}`);
    return;
  }
  if (req.path.endsWith("/") && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    const safepath = req.path.slice(0, -1).replace(/\/+/g, "/");
    res.redirect(301, safepath + query);
  }
  next();
});
app.all("*", function getReplayResponse(req, res, next) {
  const { method, path: pathname } = req;
  const { PRIMARY_REGION, FLY_REGION } = process.env;
  const isMethodReplayable = !["GET", "OPTIONS", "HEAD"].includes(method);
  const isReadOnlyRegion = FLY_REGION && PRIMARY_REGION && FLY_REGION !== PRIMARY_REGION;
  const shouldReplay = isMethodReplayable && isReadOnlyRegion;
  if (!shouldReplay)
    return next();
  const logInfo = {
    pathname,
    method,
    PRIMARY_REGION,
    FLY_REGION
  };
  console.info(`Replaying:`, logInfo);
  res.set("fly-replay", `region=${PRIMARY_REGION}`);
  return res.sendStatus(409);
});
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
const MODE = process.env.NODE_ENV;
const BUILD_DIR = import_path.default.join(process.cwd(), "build");
app.all("*", MODE === "production" ? (0, import_express2.createRequestHandler)({ build: require(BUILD_DIR) }) : (...args) => {
  purgeRequireCache();
  const requestHandler = (0, import_express2.createRequestHandler)({
    build: require(BUILD_DIR),
    mode: MODE
  });
  return requestHandler(...args);
});
const port = process.env.PORT || 3e3;
app.listen(port, () => {
  require(BUILD_DIR);
  console.log(`\u2705 app ready: http://localhost:${port}`);
});
function purgeRequireCache() {
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}
