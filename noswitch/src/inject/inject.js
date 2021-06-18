// Calendar interface, replace the 2 with whatever host authentication you are

const URLMap = {
  "calendar.google.com/calendar/u/0/r":
    "https://calendar.google.com/calendar/u/2/r",
};

const redirect = (url) => {
  window.location.replace(url);
};
Object.entries(URLMap).forEach(([matchURL, newURL]) => {
  if (window.location.href.match(matchURL)) redirect(newURL);
});

// Meet interface, replace the 2 with whatever host authentication you are
if (
  window.location.host === "meet.google.com" &&
  window.location.search !== "?authuser=2"
) {
  window.location.search = "?authuser=2";
}
