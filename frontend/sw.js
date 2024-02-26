// install event
window.self.addEventListener("install", () => {
  console.log("[Service Worker] installed");
});

// activate event
window.self.addEventListener("activate", (e) => {
  console.log("[Service Worker] actived", e);
});

// fetch event
window.self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] fetched resource ${e.request.url}`);
});
