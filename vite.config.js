import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        marathi: "marathi.html",
        geography: "geography.html",
        nmms: "nmms.html",
        contact: "contact.html",
        login: "login.html",
        marathiqz:"marathi_quiz_10.html"

      },
    },
  },
});
