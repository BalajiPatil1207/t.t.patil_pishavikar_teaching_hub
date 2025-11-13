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
        mqz4:"marathi_quiz_test4.html",
        geoclass10:"geography_class10.html",
        geoqzgroup:"geography_quiz_10.html",
        geoqz1:"quiz_test1.html",
        geoqz2:"quiz_test2.html",
        geoqz3:"quiz_test3.html",
        geoqz4:"quiz_test4.html",
        geoqz5:"quiz_test5.html",
        geoqz6:"quiz_test6.html",
        geoqz7:"quiz_test7.html",
        geoqz8:"quiz_test8.html",
        geoqz9:"quiz_test9.html",
        geoqz10:"quiz_test10.html",
      },
    },
  },
});
