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
        marathiclass10:"marathi_class10.html",
        marathiqz:"marathi_quiz_10.html",
        mqz1:"marathi_quiz_test1.html",
        mqz2:"marathi_quiz_test2.html",
        mqz3:"marathi_quiz_test3.html",
        mqz4:"marathi_quiz_test4.html"
      },
    },
  },
});
