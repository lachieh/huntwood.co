var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-I7ILBV7G.css";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-IACIH3NW.css";

// app/session.server.ts
init_react();
var import_remix2 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
init_react();
var import_bcrypt = __toESM(require("@node-rs/bcrypt"));

// app/db.server.ts
init_react();
var import_client = require("@prisma/client");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var prisma;
if (false) {
  prisma = getClient();
} else {
  if (!global.__db__) {
    global.__db__ = getClient();
  }
  prisma = global.__db__;
}
function getClient() {
  const { DATABASE_URL } = process.env;
  (0, import_tiny_invariant.default)(typeof DATABASE_URL === "string", "DATABASE_URL env var not set");
  const databaseUrl = new URL(DATABASE_URL);
  const isLocalHost = databaseUrl.hostname === "localhost";
  const PRIMARY_REGION = isLocalHost ? null : process.env.PRIMARY_REGION;
  const FLY_REGION = isLocalHost ? null : process.env.FLY_REGION;
  const isReadReplicaRegion = !PRIMARY_REGION || PRIMARY_REGION === FLY_REGION;
  if (!isLocalHost) {
    databaseUrl.host = `${FLY_REGION}.${databaseUrl.host}`;
    if (!isReadReplicaRegion) {
      databaseUrl.port = "5433";
    }
  }
  console.log(`\u{1F50C} setting up prisma client to ${databaseUrl.host}`);
  const client = new import_client.PrismaClient({
    datasources: {
      db: {
        url: databaseUrl.toString()
      }
    }
  });
  client.$connect();
  return client;
}

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  const hashedPassword = await import_bcrypt.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true
    }
  });
  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }
  const isValid = await import_bcrypt.default.verify(password, userWithPassword.password.hash);
  if (!isValid) {
    return null;
  }
  const _a = userWithPassword, { password: _password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant2.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: false
  }
});
var USER_SESSION_KEY = "userId";
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (userId === void 0)
    return null;
  const user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return (0, import_remix2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  const session = await getSession(request);
  return (0, import_remix2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: fonts_default },
    { rel: "stylesheet", href: tailwind_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
var loader = async ({ request }) => {
  return (0, import_remix3.json)({
    user: await getUser(request)
  });
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
init_react();
var loader2 = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    await Promise.all([
      prisma.user.count(),
      fetch(`http://${host}`, { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]);
    return new Response("OK");
  } catch (error) {
    console.log("healthcheck \u274C", { error });
    return new Response("ERROR", { status: 500 });
  }
};

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader3
});
init_react();
var import_remix4 = __toESM(require_remix());
var action = async ({ request }) => {
  return logout(request);
};
var loader3 = async () => {
  return (0, import_remix4.redirect)("/");
};

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/components/HeroImage.tsx
init_react();
var import_framer_motion = require("framer-motion");

// app/assets/images/hero.jpg
var hero_default = "/build/_assets/hero-SKS46PE5.jpg";

// app/components/HeroImage.tsx
var HeroImage = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen"
  }, /* @__PURE__ */ React.createElement(import_framer_motion.motion.img, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5, delay: 2.5, ease: "easeInOut" },
    src: hero_default,
    alt: "Mitchell and Natalie",
    className: "object-cover w-full h-5/6"
  }));
};
var HeroImage_default = HeroImage;

// app/components/Intro.tsx
init_react();
var import_framer_motion2 = require("framer-motion");
var Intro = (props) => {
  if (typeof document === "undefined")
    return null;
  const windowWidth = window ? window.innerWidth : document.documentElement.clientWidth || document.body.clientWidth || 0;
  const windowHeight = window ? window.innerHeight : document.documentElement.clientHeight || document.body.clientHeight || 0;
  const baseAnimationProps = {
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
      x: {
        delay: 2,
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  const leftProps = __spreadProps(__spreadValues({}, baseAnimationProps), {
    initial: {
      right: "-5em",
      y: "-50%"
    },
    animate: {
      right: "-3.5em",
      y: "-50%"
    }
  });
  const rightProps = __spreadProps(__spreadValues({}, baseAnimationProps), {
    initial: {
      left: "-5.9em",
      y: "-50%"
    },
    animate: {
      left: "-3.81em",
      y: "-50%"
    }
  });
  return /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
    initial: { height: `${windowHeight}px` },
    animate: { height: "40px" },
    transition: { duration: 1, delay: 2.5, ease: "easeInOut" },
    className: "flex flex-col items-center justify-center h-screen relative"
  }, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.h1, {
    initial: { fontSize: `${windowWidth * 0.08}px` },
    animate: { fontSize: "32px" },
    transition: { duration: 1, delay: 2.5, ease: "easeInOut" },
    className: "text-[8.34vw] leading-none"
  }, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.span, {
    className: "block absolute top-0 left-0 h-full w-1/2 text-green overflow-hidden"
  }, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.span, __spreadProps(__spreadValues({}, leftProps), {
    className: "absolute pb-[0.1em] top-1/2 -translate-y-1/2 right-[-3.5em] whitespace-nowrap"
  }), "Mitchell & Natalie")), /* @__PURE__ */ React.createElement(import_framer_motion2.motion.span, {
    className: "block absolute top-0 left-1/2 h-full w-1/2 text-blue overflow-hidden"
  }, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.span, __spreadProps(__spreadValues({}, rightProps), {
    className: "absolute pb-[0.1em] top-1/2 -translate-y-1/2 left-[-3.81em] whitespace-nowrap"
  }), "Mitchell & Natalie"))));
};
var Intro_default = Intro;

// app/utils.ts
init_react();
var import_react = require("react");
var import_remix5 = __toESM(require_remix());
function useMatchesData(id) {
  const matchingRoutes = (0, import_remix5.useMatches)();
  const route = (0, import_react.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user === "object" && typeof user.email === "string";
}
function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
  }
  return maybeUser;
}
function validateEmail(email) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/index.tsx
function Index() {
  const user = useOptionalUser();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Intro_default, null), /* @__PURE__ */ React.createElement(HeroImage_default, null));
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var React2 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());
var loader4 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix6.redirect)("/");
  return (0, import_remix6.json)({});
};
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");
  if (!validateEmail(email)) {
    return (0, import_remix6.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix6.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix6.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  const user = await verifyLogin(email, password);
  if (!user) {
    return (0, import_remix6.json)({ errors: { email: "Invalid email or password" } }, { status: 400 });
  }
  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/notes"
  });
};
var meta2 = () => {
  return {
    title: "Login"
  };
};
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix6.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = (0, import_remix6.useActionData)();
  const emailRef = React2.useRef(null);
  const passwordRef = React2.useRef(null);
  React2.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React2.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React2.createElement(import_remix6.Form, {
    method: "post",
    className: "space-y-6",
    noValidate: true
  }, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React2.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React2.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React2.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React2.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React2.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React2.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React2.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React2.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Log in"), /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("input", {
    id: "remember",
    name: "remember",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
  }), /* @__PURE__ */ React2.createElement("label", {
    htmlFor: "remember",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), /* @__PURE__ */ React2.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Don't have an account?", " ", /* @__PURE__ */ React2.createElement(import_remix6.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/join",
      search: searchParams.toString()
    }
  }, "Sign up"))))));
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader5
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/models/note.server.ts
init_react();
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/notes.tsx
var loader5 = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return (0, import_remix7.json)({ noteListItems });
};
function NotesPage() {
  const data = (0, import_remix7.useLoaderData)();
  const user = useUser();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full min-h-screen flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center justify-between bg-slate-800 p-4 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "."
  }, "Notes")), /* @__PURE__ */ React.createElement("p", null, user.email), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
  }, "Logout"))), /* @__PURE__ */ React.createElement("main", {
    className: "flex h-full bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-80 border-r bg-gray-50"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "new",
    className: "block p-4 text-xl text-blue-500"
  }, "+ New Note"), /* @__PURE__ */ React.createElement("hr", null), data.noteListItems.length === 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, "No notes yet") : /* @__PURE__ */ React.createElement("ol", null, data.noteListItems.map((note) => /* @__PURE__ */ React.createElement("li", {
    key: note.id
  }, /* @__PURE__ */ React.createElement(import_remix7.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
    to: note.id
  }, "\u{1F4DD} ", note.title))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-6"
  }, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null))));
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/notes/$noteId.tsx
var noteId_exports = {};
__export(noteId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action3,
  default: () => NoteDetailsPage,
  loader: () => loader6
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var loader6 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant3.default)(params.noteId, "noteId not found");
  const note = await getNote({ userId, id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return (0, import_remix9.json)({ note });
};
var action3 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant3.default)(params.noteId, "noteId not found");
  await deleteNote({ userId, id: params.noteId });
  return (0, import_remix8.redirect)("/notes");
};
function NoteDetailsPage() {
  const data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, data.note.title), /* @__PURE__ */ React.createElement("p", {
    className: "py-6"
  }, data.note.body), /* @__PURE__ */ React.createElement("hr", {
    className: "my-4"
  }), /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Delete")));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, "An unexpected error occurred: ", error.message);
}
function CatchBoundary() {
  const caught = (0, import_remix9.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", null, "Note not found");
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/notes/index.tsx
var notes_exports2 = {};
__export(notes_exports2, {
  default: () => NoteIndexPage
});
init_react();
var import_remix10 = __toESM(require_remix());
function NoteIndexPage() {
  return /* @__PURE__ */ React.createElement("p", null, "No note selected. Select a note on the left, or", " ", /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "new",
    className: "text-blue-500 underline"
  }, "create a new note."));
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/notes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => NewNotePage
});
init_react();
var React3 = __toESM(require("react"));
var import_remix11 = __toESM(require_remix());
var import_alert = __toESM(require("@reach/alert"));
var action4 = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  if (typeof title !== "string" || title.length === 0) {
    return (0, import_remix11.json)({ errors: { title: "Title is required" } }, { status: 400 });
  }
  if (typeof body !== "string" || body.length === 0) {
    return (0, import_remix11.json)({ errors: { body: "Body is required" } }, { status: 400 });
  }
  const note = await createNote({ title, body, userId });
  return (0, import_remix11.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  const actionData = (0, import_remix11.useActionData)();
  const titleRef = React3.useRef(null);
  const bodyRef = React3.useRef(null);
  React3.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.title) {
      (_b2 = titleRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.body) {
      (_d2 = bodyRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React3.createElement(import_remix11.Form, {
    method: "post",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React3.createElement("span", null, "Title: "), /* @__PURE__ */ React3.createElement("input", {
    ref: titleRef,
    name: "title",
    className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? true : void 0,
    "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
  })), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ React3.createElement(import_alert.default, {
    className: "pt-1 text-red-700",
    id: "title=error"
  }, actionData.errors.title)), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React3.createElement("span", null, "Body: "), /* @__PURE__ */ React3.createElement("textarea", {
    ref: bodyRef,
    name: "body",
    rows: 8,
    className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? true : void 0,
    "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.body) ? "body-error" : void 0
  })), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ React3.createElement(import_alert.default, {
    className: "pt-1 text-red-700",
    id: "body=error"
  }, actionData.errors.body)), /* @__PURE__ */ React3.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React3.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Save")));
}

// route:/Volumes/SSD/Projects/Personal/mitchalie.com/app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action5,
  default: () => Join,
  loader: () => loader7,
  meta: () => meta3
});
init_react();
var React4 = __toESM(require("react"));
var import_remix12 = __toESM(require_remix());
var loader7 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix12.redirect)("/");
  return (0, import_remix12.json)({});
};
var action5 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  if (!validateEmail(email)) {
    return (0, import_remix12.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix12.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix12.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return (0, import_remix12.json)({ errors: { email: "A user already exists with this email" } }, { status: 400 });
  }
  const user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/"
  });
};
var meta3 = () => {
  return {
    title: "Sign Up"
  };
};
function Join() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix12.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") ?? void 0;
  const actionData = (0, import_remix12.useActionData)();
  const emailRef = React4.useRef(null);
  const passwordRef = React4.useRef(null);
  React4.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React4.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React4.createElement(import_remix12.Form, {
    method: "post",
    className: "space-y-6",
    noValidate: true
  }, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React4.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React4.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React4.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React4.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React4.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React4.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React4.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React4.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Create Account"), /* @__PURE__ */ React4.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Already have an account?", " ", /* @__PURE__ */ React4.createElement(import_remix12.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/login",
      search: searchParams.toString()
    }
  }, "Log in"))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "da75444c", "entry": { "module": "/build/entry.client-RXBUCK2I.js", "imports": ["/build/_shared/chunk-YJZK26PK.js", "/build/_shared/chunk-K45KMMGC.js", "/build/_shared/chunk-325D37MS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CPZTLQBZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/healthcheck": { "id": "routes/healthcheck", "parentId": "root", "path": "healthcheck", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/healthcheck-ZO5VH4ON.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-MN7OXKDT.js", "imports": ["/build/_shared/chunk-LDX7HDBE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/join": { "id": "routes/join", "parentId": "root", "path": "join", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/join-3OV4HLO7.js", "imports": ["/build/_shared/chunk-3TWUA7WF.js", "/build/_shared/chunk-LDX7HDBE.js", "/build/_shared/chunk-5PCNUGRJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-MY2NVB7F.js", "imports": ["/build/_shared/chunk-3TWUA7WF.js", "/build/_shared/chunk-LDX7HDBE.js", "/build/_shared/chunk-5PCNUGRJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-UCRIKWF6.js", "imports": ["/build/_shared/chunk-5PCNUGRJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes": { "id": "routes/notes", "parentId": "root", "path": "notes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes-6ZIOBYGU.js", "imports": ["/build/_shared/chunk-LDX7HDBE.js", "/build/_shared/chunk-Q43BMXD7.js", "/build/_shared/chunk-5PCNUGRJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes/$noteId": { "id": "routes/notes/$noteId", "parentId": "routes/notes", "path": ":noteId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes/$noteId-D5MCL6XZ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/notes/index": { "id": "routes/notes/index", "parentId": "routes/notes", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/notes/index-LWYOFV5P.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes/new": { "id": "routes/notes/new", "parentId": "routes/notes", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes/new-LU66CH55.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DA75444C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/notes/$noteId": {
    id: "routes/notes/$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: noteId_exports
  },
  "routes/notes/index": {
    id: "routes/notes/index",
    parentId: "routes/notes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: notes_exports2
  },
  "routes/notes/new": {
    id: "routes/notes/new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb290LnRzeCIsICIuLi9hcHAvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL21vZGVscy91c2VyLnNlcnZlci50cyIsICIuLi9hcHAvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvaGVhbHRoY2hlY2sudHN4IiwgInJvdXRlOi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZXJvSW1hZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ludHJvLnRzeCIsICIuLi9hcHAvdXRpbHMudHMiLCAicm91dGU6L1ZvbHVtZXMvU1NEL1Byb2plY3RzL1BlcnNvbmFsL21pdGNoYWxpZS5jb20vYXBwL3JvdXRlcy9sb2dpbi50c3giLCAicm91dGU6L1ZvbHVtZXMvU1NEL1Byb2plY3RzL1BlcnNvbmFsL21pdGNoYWxpZS5jb20vYXBwL3JvdXRlcy9ub3Rlcy50c3giLCAiLi4vYXBwL21vZGVscy9ub3RlLnNlcnZlci50cyIsICJyb3V0ZTovVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL25vdGVzLyRub3RlSWQudHN4IiwgInJvdXRlOi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvbm90ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvbm90ZXMvbmV3LnRzeCIsICJyb3V0ZTovVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL2pvaW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1ZvbHVtZXMvU1NEL1Byb2plY3RzL1BlcnNvbmFsL21pdGNoYWxpZS5jb20vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1ZvbHVtZXMvU1NEL1Byb2plY3RzL1BlcnNvbmFsL21pdGNoYWxpZS5jb20vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvaGVhbHRoY2hlY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL25vdGVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL25vdGVzLyRub3RlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvbm90ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Wb2x1bWVzL1NTRC9Qcm9qZWN0cy9QZXJzb25hbC9taXRjaGFsaWUuY29tL2FwcC9yb3V0ZXMvbm90ZXMvbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVm9sdW1lcy9TU0QvUHJvamVjdHMvUGVyc29uYWwvbWl0Y2hhbGllLmNvbS9hcHAvcm91dGVzL2pvaW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9oZWFsdGhjaGVja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGVhbHRoY2hlY2tcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaGVhbHRoY2hlY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9ub3Rlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90ZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibm90ZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL25vdGVzLyRub3RlSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGVzLyRub3RlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ub3Rlc1wiLFxuICAgICAgcGF0aDogXCI6bm90ZUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ub3Rlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ub3Rlc1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL25vdGVzL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90ZXMvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbm90ZXNcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9qb2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9qb2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImpvaW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAganNvbixcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB0YWlsd2luZFN0eWxlc2hlZXRVcmwgZnJvbSBcIi4vc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IGZvbnRTdHlsZXNoZWV0VXJsIGZyb20gXCIuL3N0eWxlcy9mb250cy5jc3NcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBmb250U3R5bGVzaGVldFVybCB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZXNoZWV0VXJsIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJSZW1peCBOb3Rlc1wiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICB1c2VyOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGdldFVzZXI+Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHtcbiAgICB1c2VyOiBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJoLWZ1bGxcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImgtZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlckJ5SWQgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcblxuaW52YXJpYW50KHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVULCBcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX19zZXNzaW9uXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgbWF4QWdlOiAwLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHNlY3JldHM6IFtwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVF0sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuY29uc3QgVVNFUl9TRVNTSU9OX0tFWSA9IFwidXNlcklkXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgY29va2llID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKTtcbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldFNlc3Npb24oY29va2llKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFVTRVJfU0VTU0lPTl9LRVkpO1xuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxudWxsIHwgVXNlcj4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICh1c2VySWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKHVzZXJJZCk7XG4gIGlmICh1c2VyKSByZXR1cm4gdXNlcjtcblxuICB0aHJvdyBhd2FpdCBsb2dvdXQocmVxdWVzdCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBpZiAoIXVzZXJJZCkge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKHVzZXJJZCk7XG4gIGlmICh1c2VyKSByZXR1cm4gdXNlcjtcblxuICB0aHJvdyBhd2FpdCBsb2dvdXQocmVxdWVzdCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih7XG4gIHJlcXVlc3QsXG4gIHVzZXJJZCxcbiAgcmVtZW1iZXIsXG4gIHJlZGlyZWN0VG8sXG59OiB7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHVzZXJJZDogc3RyaW5nO1xuICByZW1lbWJlcjogYm9vbGVhbjtcbiAgcmVkaXJlY3RUbzogc3RyaW5nO1xufSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0KTtcbiAgc2Vzc2lvbi5zZXQoVVNFUl9TRVNTSU9OX0tFWSwgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uLCB7XG4gICAgICAgIG1heEFnZTogcmVtZW1iZXJcbiAgICAgICAgICA/IDYwICogNjAgKiAyNCAqIDcgLy8gNyBkYXlzXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBQYXNzd29yZCwgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiQG5vZGUtcnMvYmNyeXB0XCI7XG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJ+L2RiLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlkKGlkOiBVc2VyW1wiaWRcIl0pIHtcbiAgcmV0dXJuIHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5RW1haWwoZW1haWw6IFVzZXJbXCJlbWFpbFwiXSkge1xuICByZXR1cm4gcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsOiBVc2VyW1wiZW1haWxcIl0sIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gIHJldHVybiBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgaGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlckJ5RW1haWwoZW1haWw6IFVzZXJbXCJlbWFpbFwiXSkge1xuICByZXR1cm4gcHJpc21hLnVzZXIuZGVsZXRlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUxvZ2luKFxuICBlbWFpbDogVXNlcltcImVtYWlsXCJdLFxuICBwYXNzd29yZDogUGFzc3dvcmRbXCJoYXNoXCJdXG4pIHtcbiAgY29uc3QgdXNlcldpdGhQYXNzd29yZCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCF1c2VyV2l0aFBhc3N3b3JkIHx8ICF1c2VyV2l0aFBhc3N3b3JkLnBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LnZlcmlmeShwYXNzd29yZCwgdXNlcldpdGhQYXNzd29yZC5wYXNzd29yZC5oYXNoKTtcblxuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgcGFzc3dvcmQ6IF9wYXNzd29yZCwgLi4udXNlcldpdGhvdXRQYXNzd29yZCB9ID0gdXNlcldpdGhQYXNzd29yZDtcblxuICByZXR1cm4gdXNlcldpdGhvdXRQYXNzd29yZDtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYl9fOiBQcmlzbWFDbGllbnQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG4vLyBpbiBwcm9kdWN0aW9uIHdlJ2xsIGhhdmUgYSBzaW5nbGUgY29ubmVjdGlvbiB0byB0aGUgREIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IGdldENsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYl9fKSB7XG4gICAgZ2xvYmFsLl9fZGJfXyA9IGdldENsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5fX2RiX187XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudCgpIHtcbiAgY29uc3QgeyBEQVRBQkFTRV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuICBpbnZhcmlhbnQodHlwZW9mIERBVEFCQVNFX1VSTCA9PT0gXCJzdHJpbmdcIiwgXCJEQVRBQkFTRV9VUkwgZW52IHZhciBub3Qgc2V0XCIpO1xuXG4gIGNvbnN0IGRhdGFiYXNlVXJsID0gbmV3IFVSTChEQVRBQkFTRV9VUkwpO1xuXG4gIGNvbnN0IGlzTG9jYWxIb3N0ID0gZGF0YWJhc2VVcmwuaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCI7XG5cbiAgY29uc3QgUFJJTUFSWV9SRUdJT04gPSBpc0xvY2FsSG9zdCA/IG51bGwgOiBwcm9jZXNzLmVudi5QUklNQVJZX1JFR0lPTjtcbiAgY29uc3QgRkxZX1JFR0lPTiA9IGlzTG9jYWxIb3N0ID8gbnVsbCA6IHByb2Nlc3MuZW52LkZMWV9SRUdJT047XG5cbiAgY29uc3QgaXNSZWFkUmVwbGljYVJlZ2lvbiA9ICFQUklNQVJZX1JFR0lPTiB8fCBQUklNQVJZX1JFR0lPTiA9PT0gRkxZX1JFR0lPTjtcblxuICBpZiAoIWlzTG9jYWxIb3N0KSB7XG4gICAgZGF0YWJhc2VVcmwuaG9zdCA9IGAke0ZMWV9SRUdJT059LiR7ZGF0YWJhc2VVcmwuaG9zdH1gO1xuICAgIGlmICghaXNSZWFkUmVwbGljYVJlZ2lvbikge1xuICAgICAgLy8gNTQzMyBpcyB0aGUgcmVhZC1yZXBsaWNhIHBvcnRcbiAgICAgIGRhdGFiYXNlVXJsLnBvcnQgPSBcIjU0MzNcIjtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhgXHVEODNEXHVERDBDIHNldHRpbmcgdXAgcHJpc21hIGNsaWVudCB0byAke2RhdGFiYXNlVXJsLmhvc3R9YCk7XG4gIC8vIE5PVEU6IGR1cmluZyBkZXZlbG9wbWVudCBpZiB5b3UgY2hhbmdlIGFueXRoaW5nIGluIHRoaXMgZnVuY3Rpb24sIHJlbWVtYmVyXG4gIC8vIHRoYXQgdGhpcyBvbmx5IHJ1bnMgb25jZSBwZXIgc2VydmVyIHJlc3RhcnQgYW5kIHdvbid0IGF1dG9tYXRpY2FsbHkgYmVcbiAgLy8gcmUtcnVuIHBlciByZXF1ZXN0IGxpa2UgZXZlcnl0aGluZyBlbHNlIGlzLiBTbyBpZiB5b3UgbmVlZCB0byBjaGFuZ2VcbiAgLy8gc29tZXRoaW5nIGluIHRoaXMgZmlsZSwgeW91J2xsIG5lZWQgdG8gbWFudWFsbHkgcmVzdGFydCB0aGUgc2VydmVyLlxuICBjb25zdCBjbGllbnQgPSBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBkYXRhc291cmNlczoge1xuICAgICAgZGI6IHtcbiAgICAgICAgdXJsOiBkYXRhYmFzZVVybC50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgLy8gY29ubmVjdCBlYWdlcmx5XG4gIGNsaWVudC4kY29ubmVjdCgpO1xuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCB7IHByaXNtYSB9O1xuIiwgIi8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZmx5LmlvL2RvY3MvcmVmZXJlbmNlL2NvbmZpZ3VyYXRpb24vI3NlcnZpY2VzLWh0dHBfY2hlY2tzXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgaG9zdCA9XG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIlgtRm9yd2FyZGVkLUhvc3RcIikgPz8gcmVxdWVzdC5oZWFkZXJzLmdldChcImhvc3RcIik7XG5cbiAgdHJ5IHtcbiAgICAvLyBpZiB3ZSBjYW4gY29ubmVjdCB0byB0aGUgZGF0YWJhc2UgYW5kIG1ha2UgYSBzaW1wbGUgcXVlcnlcbiAgICAvLyBhbmQgbWFrZSBhIEhFQUQgcmVxdWVzdCB0byBvdXJzZWx2ZXMsIHRoZW4gd2UncmUgZ29vZC5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBwcmlzbWEudXNlci5jb3VudCgpLFxuICAgICAgZmV0Y2goYGh0dHA6Ly8ke2hvc3R9YCwgeyBtZXRob2Q6IFwiSEVBRFwiIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgaWYgKCFyLm9rKSByZXR1cm4gUHJvbWlzZS5yZWplY3Qocik7XG4gICAgICB9KSxcbiAgICBdKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiT0tcIik7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWFsdGhjaGVjayBcdTI3NENcIiwgeyBlcnJvciB9KTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRVJST1JcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbn07XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEhlcm9JbWFnZSBmcm9tIFwifi9jb21wb25lbnRzL0hlcm9JbWFnZVwiO1xuaW1wb3J0IEludHJvIGZyb20gXCJ+L2NvbXBvbmVudHMvSW50cm9cIjtcbmltcG9ydCB7IHVzZU9wdGlvbmFsVXNlciB9IGZyb20gXCJ+L3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB1c2VyID0gdXNlT3B0aW9uYWxVc2VyKCk7XG4gIHJldHVybiAoXG4gICAgXG4gICAgPG1haW4+XG4gICAgICA8SW50cm8gLz5cbiAgICAgIDxIZXJvSW1hZ2UgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBoZXJvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaGVyby5qcGcnXG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jb25zdCBIZXJvSW1hZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlblwiPlxuICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjUsIGRlbGF5OiAyLjUsIGVhc2U6ICdlYXNlSW5PdXQnIH19XG4gICAgICAgIHNyYz17aGVyb31cbiAgICAgICAgYWx0PVwiTWl0Y2hlbGwgYW5kIE5hdGFsaWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtNS82XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb0ltYWdlIiwgImltcG9ydCB7IG1vdGlvbiwgTW90aW9uUHJvcHMgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG50eXBlIFByb3BzID0ge31cblxuY29uc3QgSW50cm8gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsXG4gIFxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdyA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggfHwgMFxuICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IHx8IDBcblxuICBjb25zdCBiYXNlQW5pbWF0aW9uUHJvcHMgPSB7XG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBlYXNlOiAnZWFzZUluT3V0JyxcbiAgICAgIGRlbGF5OiAxLFxuICAgICAgeDoge1xuICAgICAgICBkZWxheTogMixcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGVhc2U6ICdlYXNlSW5PdXQnLFxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjb25zdCBsZWZ0UHJvcHM6IE1vdGlvblByb3BzID0ge1xuICAgIC4uLmJhc2VBbmltYXRpb25Qcm9wcyxcbiAgICBpbml0aWFsOiB7XG4gICAgICByaWdodDogJy01ZW0nLFxuICAgICAgeTogJy01MCUnLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgcmlnaHQ6ICctMy41ZW0nLFxuICAgICAgeTogJy01MCUnLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJpZ2h0UHJvcHM6IE1vdGlvblByb3BzID0ge1xuICAgIC4uLmJhc2VBbmltYXRpb25Qcm9wcyxcbiAgICBpbml0aWFsOiB7XG4gICAgICBsZWZ0OiAnLTUuOWVtJyxcbiAgICAgIHk6ICctNTAlJyxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgIGxlZnQ6ICctMy44MWVtJyxcbiAgICAgIHk6ICctNTAlJyxcbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IGhlaWdodDogYCR7d2luZG93SGVpZ2h0fXB4YH19XG4gICAgICBhbmltYXRlPXt7IGhlaWdodDogJzQwcHgnIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMi41LCBlYXNlOiAnZWFzZUluT3V0JyB9fVxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gcmVsYXRpdmVcIlxuICAgID5cbiAgICAgIDxtb3Rpb24uaDEgXG4gICAgICAgIGluaXRpYWw9e3sgZm9udFNpemU6IGAke3dpbmRvd1dpZHRoICogMC4wOH1weGAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBmb250U2l6ZTogJzMycHgnIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEsIGRlbGF5OiAyLjUsIGVhc2U6ICdlYXNlSW5PdXQnIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzguMzR2d10gbGVhZGluZy1ub25lXCJcbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT0nYmxvY2sgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtZnVsbCB3LTEvMiB0ZXh0LWdyZWVuIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgPG1vdGlvbi5zcGFuIHsuLi5sZWZ0UHJvcHN9IGNsYXNzTmFtZT1cImFic29sdXRlIHBiLVswLjFlbV0gdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHJpZ2h0LVstMy41ZW1dIHdoaXRlc3BhY2Utbm93cmFwXCI+TWl0Y2hlbGwgJmFtcDsgTmF0YWxpZTwvbW90aW9uLnNwYW4+XG4gICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9J2Jsb2NrIGFic29sdXRlIHRvcC0wIGxlZnQtMS8yIGgtZnVsbCB3LTEvMiB0ZXh0LWJsdWUgb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgICA8bW90aW9uLnNwYW4gey4uLnJpZ2h0UHJvcHN9IGNsYXNzTmFtZT1cImFic29sdXRlIHBiLVswLjFlbV0gdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGxlZnQtWy0zLjgxZW1dIHdoaXRlc3BhY2Utbm93cmFwXCI+TWl0Y2hlbGwgJmFtcDsgTmF0YWxpZTwvbW90aW9uLnNwYW4+XG4gICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICA8L21vdGlvbi5oMT5cbiAgICA8L21vdGlvbi5kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvIiwgImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU1hdGNoZXMgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5cbi8qKlxuICogVGhpcyBiYXNlIGhvb2sgaXMgdXNlZCBpbiBvdGhlciBob29rcyB0byBxdWlja2x5IHNlYXJjaCBmb3Igc3BlY2lmaWMgZGF0YVxuICogYWNyb3NzIGFsbCBsb2FkZXIgZGF0YSB1c2luZyB1c2VNYXRjaGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3V0ZSBpZFxuICogQHJldHVybnMge0pTT058dW5kZWZpbmVkfSBUaGUgcm91dGVyIGRhdGEgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWF0Y2hlc0RhdGEoXG4gIGlkOiBzdHJpbmdcbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgbWF0Y2hpbmdSb3V0ZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGNvbnN0IHJvdXRlID0gdXNlTWVtbyhcbiAgICAoKSA9PiBtYXRjaGluZ1JvdXRlcy5maW5kKChyb3V0ZSkgPT4gcm91dGUuaWQgPT09IGlkKSxcbiAgICBbbWF0Y2hpbmdSb3V0ZXMsIGlkXVxuICApO1xuICByZXR1cm4gcm91dGU/LmRhdGE7XG59XG5cbmZ1bmN0aW9uIGlzVXNlcih1c2VyOiBhbnkpOiB1c2VyIGlzIFVzZXIge1xuICByZXR1cm4gdXNlciAmJiB0eXBlb2YgdXNlciA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdXNlci5lbWFpbCA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU9wdGlvbmFsVXNlcigpOiBVc2VyIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZGF0YSA9IHVzZU1hdGNoZXNEYXRhKFwicm9vdFwiKTtcbiAgaWYgKCFkYXRhIHx8ICFpc1VzZXIoZGF0YS51c2VyKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGRhdGEudXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKTogVXNlciB7XG4gIGNvbnN0IG1heWJlVXNlciA9IHVzZU9wdGlvbmFsVXNlcigpO1xuICBpZiAoIW1heWJlVXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiTm8gdXNlciBmb3VuZCBpbiByb290IGxvYWRlciwgYnV0IHVzZXIgaXMgcmVxdWlyZWQgYnkgdXNlVXNlci4gSWYgdXNlciBpcyBvcHRpb25hbCwgdHJ5IHVzZU9wdGlvbmFsVXNlciBpbnN0ZWFkLlwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gbWF5YmVVc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogdW5rbm93bik6IGVtYWlsIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgZW1haWwgPT09IFwic3RyaW5nXCIgJiYgZW1haWwubGVuZ3RoID4gMyAmJiBlbWFpbC5pbmNsdWRlcyhcIkBcIik7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBGb3JtLFxuICBqc29uLFxuICBMaW5rLFxuICB1c2VBY3Rpb25EYXRhLFxuICByZWRpcmVjdCxcbiAgdXNlU2VhcmNoUGFyYW1zLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24sIGdldFVzZXJJZCB9IGZyb20gXCJ+L3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyB2ZXJpZnlMb2dpbiB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gXCJ+L3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKHVzZXJJZCkgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbiAgcmV0dXJuIGpzb24oe30pO1xufTtcblxuaW50ZXJmYWNlIEFjdGlvbkRhdGEge1xuICBlcnJvcnM/OiB7XG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybURhdGEuZ2V0KFwicmVkaXJlY3RUb1wiKTtcbiAgY29uc3QgcmVtZW1iZXIgPSBmb3JtRGF0YS5nZXQoXCJyZW1lbWJlclwiKTtcblxuICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBlbWFpbDogXCJFbWFpbCBpcyBpbnZhbGlkXCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ganNvbjxBY3Rpb25EYXRhPihcbiAgICAgIHsgZXJyb3JzOiB7IHBhc3N3b3JkOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBwYXNzd29yZDogXCJQYXNzd29yZCBpcyB0b28gc2hvcnRcIiB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHZlcmlmeUxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBlbWFpbDogXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih7XG4gICAgcmVxdWVzdCxcbiAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgcmVtZW1iZXI6IHJlbWVtYmVyID09PSBcIm9uXCIgPyB0cnVlIDogZmFsc2UsXG4gICAgcmVkaXJlY3RUbzogdHlwZW9mIHJlZGlyZWN0VG8gPT09IFwic3RyaW5nXCIgPyByZWRpcmVjdFRvIDogXCIvbm90ZXNcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkxvZ2luXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSB8fCBcIi9ub3Rlc1wiO1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XG4gIGNvbnN0IGVtYWlsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsKSB7XG4gICAgICBlbWFpbFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uRGF0YT8uZXJyb3JzPy5wYXNzd29yZCkge1xuICAgICAgcGFzc3dvcmRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25EYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBtYXgtdy1tZCBweC04XCI+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWwtZXJyb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS01MDAgcHgtMiBweS0xIHRleHQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzPy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xIHRleHQtcmVkLTcwMFwiIGlkPVwiZW1haWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzPy5wYXNzd29yZCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHB4LTIgcHktMSB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycz8ucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXJlZC03MDBcIiBpZD1cInBhc3N3b3JkLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5lcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZGlyZWN0VG9cIiB2YWx1ZT17cmVkaXJlY3RUb30gLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJnLWJsdWUtNTAwICBweS0yIHB4LTQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpiZy1ibHVlLTQwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgcm91bmRlZCBib3JkZXItZ3JheS0zMDAgdGV4dC1ibHVlLTYwMCBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlbWVtYmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZW1lbWJlciBtZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2pvaW5cIixcbiAgICAgICAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0sIGpzb24sIHVzZUxvYWRlckRhdGEsIE91dGxldCwgTGluaywgTmF2TGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwifi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0Tm90ZUxpc3RJdGVtcyB9IGZyb20gXCJ+L21vZGVscy9ub3RlLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIG5vdGVMaXN0SXRlbXM6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0Tm90ZUxpc3RJdGVtcz4+O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3Qgbm90ZUxpc3RJdGVtcyA9IGF3YWl0IGdldE5vdGVMaXN0SXRlbXMoeyB1c2VySWQgfSk7XG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgbm90ZUxpc3RJdGVtcyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVzUGFnZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyBMb2FkZXJEYXRhO1xuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBtaW4taC1zY3JlZW4gZmxleC1jb2xcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXNsYXRlLTgwMCBwLTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIuXCI+Tm90ZXM8L0xpbms+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgPEZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctc2xhdGUtNjAwIHB5LTIgcHgtNCB0ZXh0LWJsdWUtMTAwIGhvdmVyOmJnLWJsdWUtNTAwIGFjdGl2ZTpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LTgwIGJvcmRlci1yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICA8TGluayB0bz1cIm5ld1wiIGNsYXNzTmFtZT1cImJsb2NrIHAtNCB0ZXh0LXhsIHRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICsgTmV3IE5vdGVcbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgIHtkYXRhLm5vdGVMaXN0SXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00XCI+Tm8gbm90ZXMgeWV0PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgIHtkYXRhLm5vdGVMaXN0SXRlbXMubWFwKChub3RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bm90ZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgYGJsb2NrIGJvcmRlci1iIHAtNCB0ZXh0LXhsICR7aXNBY3RpdmUgPyBcImJnLXdoaXRlXCIgOiBcIlwifWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0bz17bm90ZS5pZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0REIHtub3RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTZcIj5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVXNlciwgTm90ZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgeyBOb3RlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlKHtcbiAgaWQsXG4gIHVzZXJJZCxcbn06IFBpY2s8Tm90ZSwgXCJpZFwiPiAmIHtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBwcmlzbWEubm90ZS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB1c2VySWQgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlTGlzdEl0ZW1zKHsgdXNlcklkIH06IHsgdXNlcklkOiBVc2VyW1wiaWRcIl0gfSkge1xuICByZXR1cm4gcHJpc21hLm5vdGUuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdGl0bGU6IHRydWUgfSxcbiAgICBvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RlKHtcbiAgYm9keSxcbiAgdGl0bGUsXG4gIHVzZXJJZCxcbn06IFBpY2s8Tm90ZSwgXCJib2R5XCIgfCBcInRpdGxlXCI+ICYge1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5ub3RlLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGUsXG4gICAgICBib2R5LFxuICAgICAgdXNlcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVOb3RlKHtcbiAgaWQsXG4gIHVzZXJJZCxcbn06IFBpY2s8Tm90ZSwgXCJpZFwiPiAmIHsgdXNlcklkOiBVc2VyW1wiaWRcIl0gfSkge1xuICByZXR1cm4gcHJpc21hLm5vdGUuZGVsZXRlTWFueSh7XG4gICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEsIHVzZUNhdGNoLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHR5cGUgeyBOb3RlIH0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBkZWxldGVOb3RlIH0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXROb3RlIH0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBub3RlOiBOb3RlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLm5vdGVJZCwgXCJub3RlSWQgbm90IGZvdW5kXCIpO1xuXG4gIGNvbnN0IG5vdGUgPSBhd2FpdCBnZXROb3RlKHsgdXNlcklkLCBpZDogcGFyYW1zLm5vdGVJZCB9KTtcbiAgaWYgKCFub3RlKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbiAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBub3RlIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLm5vdGVJZCwgXCJub3RlSWQgbm90IGZvdW5kXCIpO1xuXG4gIGF3YWl0IGRlbGV0ZU5vdGUoeyB1c2VySWQsIGlkOiBwYXJhbXMubm90ZUlkIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ub3Rlc1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVEZXRhaWxzUGFnZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyBMb2FkZXJEYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57ZGF0YS5ub3RlLnRpdGxlfTwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJweS02XCI+e2RhdGEubm90ZS5ib2R5fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctYmx1ZS01MDAgIHB5LTIgcHgtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOmJnLWJsdWUtNDAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIERlbGV0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8ZGl2PkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQ6IHtlcnJvci5tZXNzYWdlfTwvZGl2Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiA8ZGl2Pk5vdGUgbm90IGZvdW5kPC9kaXY+O1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNhdWdodCByZXNwb25zZSB3aXRoIHN0YXR1czogJHtjYXVnaHQuc3RhdHVzfWApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUluZGV4UGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8cD5cbiAgICAgIE5vIG5vdGUgc2VsZWN0ZWQuIFNlbGVjdCBhIG5vdGUgb24gdGhlIGxlZnQsIG9ye1wiIFwifVxuICAgICAgPExpbmsgdG89XCJuZXdcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIHVuZGVybGluZVwiPlxuICAgICAgICBjcmVhdGUgYSBuZXcgbm90ZS5cbiAgICAgIDwvTGluaz5cbiAgICA8L3A+XG4gICk7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJAcmVhY2gvYWxlcnRcIjtcblxuaW1wb3J0IHsgY3JlYXRlTm90ZSB9IGZyb20gXCJ+L21vZGVscy9ub3RlLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3Nlc3Npb24uc2VydmVyXCI7XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZXJyb3JzPzoge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBib2R5ID0gZm9ybURhdGEuZ2V0KFwiYm9keVwiKTtcblxuICBpZiAodHlwZW9mIHRpdGxlICE9PSBcInN0cmluZ1wiIHx8IHRpdGxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KFxuICAgICAgeyBlcnJvcnM6IHsgdGl0bGU6IFwiVGl0bGUgaXMgcmVxdWlyZWRcIiB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBib2R5ICE9PSBcInN0cmluZ1wiIHx8IGJvZHkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBib2R5OiBcIkJvZHkgaXMgcmVxdWlyZWRcIiB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3Qgbm90ZSA9IGF3YWl0IGNyZWF0ZU5vdGUoeyB0aXRsZSwgYm9keSwgdXNlcklkIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChgL25vdGVzLyR7bm90ZS5pZH1gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld05vdGVQYWdlKCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XG4gIGNvbnN0IHRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBib2R5UmVmID0gUmVhY3QudXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbkRhdGE/LmVycm9ycz8udGl0bGUpIHtcbiAgICAgIHRpdGxlUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25EYXRhPy5lcnJvcnM/LmJvZHkpIHtcbiAgICAgIGJvZHlSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25EYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgZ2FwOiA4LFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICAgIDxzcGFuPlRpdGxlOiA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3RpdGxlUmVmfVxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCBweC0zIHRleHQtbGcgbGVhZGluZy1sb29zZVwiXG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycz8udGl0bGUgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgYXJpYS1lcnJvcm1lc3NhZ2U9e1xuICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnM/LnRpdGxlID8gXCJ0aXRsZS1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycz8udGl0bGUgJiYgKFxuICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJwdC0xIHRleHQtcmVkLTcwMFwiIGlkPVwidGl0bGU9ZXJyb3JcIj5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhLmVycm9ycy50aXRsZX1cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICAgIDxzcGFuPkJvZHk6IDwvc3Bhbj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJlZj17Ym9keVJlZn1cbiAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcbiAgICAgICAgICAgIHJvd3M9ezh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleC0xIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwIHB5LTIgcHgtMyB0ZXh0LWxnIGxlYWRpbmctNlwiXG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycz8uYm9keSA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBhcmlhLWVycm9ybWVzc2FnZT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycz8uYm9keSA/IFwiYm9keS1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycz8uYm9keSAmJiAoXG4gICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cInB0LTEgdGV4dC1yZWQtNzAwXCIgaWQ9XCJib2R5PWVycm9yXCI+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YS5lcnJvcnMuYm9keX1cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTUwMCAgcHktMiBweC00IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6YmctYmx1ZS00MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIExpbmssXG4gIHJlZGlyZWN0LFxuICB1c2VTZWFyY2hQYXJhbXMsXG4gIGpzb24sXG4gIHVzZUFjdGlvbkRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBnZXRVc2VySWQsIGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlVXNlciwgZ2V0VXNlckJ5RW1haWwgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tIFwifi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICh1c2VySWQpIHJldHVybiByZWRpcmVjdChcIi9cIik7XG4gIHJldHVybiBqc29uKHt9KTtcbn07XG5cbmludGVyZmFjZSBBY3Rpb25EYXRhIHtcbiAgZXJyb3JzOiB7XG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybURhdGEuZ2V0KFwicmVkaXJlY3RUb1wiKTtcblxuICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBlbWFpbDogXCJFbWFpbCBpcyBpbnZhbGlkXCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ganNvbjxBY3Rpb25EYXRhPihcbiAgICAgIHsgZXJyb3JzOiB7IHBhc3N3b3JkOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBwYXNzd29yZDogXCJQYXNzd29yZCBpcyB0b28gc2hvcnRcIiB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZ2V0VXNlckJ5RW1haWwoZW1haWwpO1xuICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBlbWFpbDogXCJBIHVzZXIgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIGVtYWlsXCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCk7XG5cbiAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICByZW1lbWJlcjogZmFsc2UsXG4gICAgcmVkaXJlY3RUbzogdHlwZW9mIHJlZGlyZWN0VG8gPT09IFwic3RyaW5nXCIgPyByZWRpcmVjdFRvIDogXCIvXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJTaWduIFVwXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2luKCkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByZWRpcmVjdFRvID0gc2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkO1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XG4gIGNvbnN0IGVtYWlsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsKSB7XG4gICAgICBlbWFpbFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uRGF0YT8uZXJyb3JzPy5wYXNzd29yZCkge1xuICAgICAgcGFzc3dvcmRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25EYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBtYXgtdy1tZCBweC04XCI+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWwtZXJyb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS01MDAgcHgtMiBweS0xIHRleHQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzPy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xIHRleHQtcmVkLTcwMFwiIGlkPVwiZW1haWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzPy5wYXNzd29yZCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHB4LTIgcHktMSB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycz8ucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXJlZC03MDBcIiBpZD1cInBhc3N3b3JkLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5lcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZGlyZWN0VG9cIiB2YWx1ZT17cmVkaXJlY3RUb30gLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJnLWJsdWUtNTAwICBweS0yIHB4LTQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpiZy1ibHVlLTQwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlIEFjY291bnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCB1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvbG9naW5cIixcbiAgICAgICAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZGE3NTQ0NGMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVJYQlVDSzJJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZSlpLMjZQSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs0NUtNTUdDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzI1RDM3TVMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUNQWlRMUUJaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oZWFsdGhjaGVjayc6eydpZCc6J3JvdXRlcy9oZWFsdGhjaGVjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidoZWFsdGhjaGVjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9oZWFsdGhjaGVjay1aTzVWSDRPTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTU43T1hLRFQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxEWDdIREJFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9qb2luJzp7J2lkJzoncm91dGVzL2pvaW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonam9pbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9qb2luLTNPVjRITE83LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zVFdVQTdXRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxEWDdIREJFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVBDTlVHUkouanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1NWTJOVkI3Ri5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1RXVUE3V0YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MRFg3SERCRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVQQ05VR1JKLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LVVDUklLV0Y2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01UENOVUdSSi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGVzJzp7J2lkJzoncm91dGVzL25vdGVzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J25vdGVzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGVzLTZaSU9CWUdVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MRFg3SERCRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVE0M0JNWEQ3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVBDTlVHUkouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbm90ZXMvJG5vdGVJZCc6eydpZCc6J3JvdXRlcy9ub3Rlcy8kbm90ZUlkJywncGFyZW50SWQnOidyb3V0ZXMvbm90ZXMnLCdwYXRoJzonOm5vdGVJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3Rlcy8kbm90ZUlkLUQ1TUNMNlhaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9ub3Rlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9ub3Rlcy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL25vdGVzJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGVzL2luZGV4LUxXWU9GVjVQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbm90ZXMvbmV3Jzp7J2lkJzoncm91dGVzL25vdGVzL25ldycsJ3BhcmVudElkJzoncm91dGVzL25vdGVzJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3Rlcy9uZXctTFU2NkNINTUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1EQTc1NDQ0Qy5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7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
