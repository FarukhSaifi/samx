// App route paths (for href, redirects, route checks)
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  WORK: "/work",
  BLOG: "/blog",
  GALLERY: "/gallery",
  ADMIN: "/admin",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    AUTHENTICATE: "/api/authenticate",
    CHECK_AUTH: "/api/check-auth",
  },
  OG_GENERATE: "/api/og/generate",
  BLOG: {
    POSTS: "/api/blog/posts",
  },
} as const;

export { BLOG_CONFIG, MDX_CONTENT_PATHS } from "./constants/blog";
export { SYNCAPP_CONFIG } from "./constants/syncapp";

// Application Configuration
export const APP_CONFIG = {
  NAME: "SamX Portfolio",
  VERSION: "2.3.0",
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000",
  ENVIRONMENT: process.env.NODE_ENV === "production" ? "production" : "development",
  IS_PRODUCTION: process.env.NODE_ENV === "production",
} as const;

// UI Configuration
export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
  LOADING_TIMEOUT: 10000,
  TOAST_DURATION: 5000,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERAL: {
    NETWORK_ERROR: "Network error. Please check your connection.",
    UNKNOWN_ERROR: "An unexpected error occurred.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
  },
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  SERVICE_UNAVAILABLE: 503,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Route guard / password protection UI
export const ROUTE_GUARD_UI = {
  PASSWORD_PROTECTED: "This page is password protected",
  PASSWORD_LABEL: "Password",
  SUBMIT: "Submit",
  INCORRECT_PASSWORD: "Incorrect password",
} as const;
