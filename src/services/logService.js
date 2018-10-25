import * as Sentry from "@sentry/browser";

Sentry.init({
  // dsn: "https://890bcd610c46446ba1fe4127095edee6@sentry.io/1307830"
});

function init() {}

function log(error) {
  console.log(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
};
