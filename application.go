package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	const indexPage = "public/arto-web/html/index.html"
	const detailPage = "public/arto-web/html/detail.html"

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Serving %s to %s...\n", indexPage, r.RemoteAddr)
		http.ServeFile(w, r, indexPage)
	})

	http.HandleFunc("/detail", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Serving %s to %s...\n", indexPage, r.RemoteAddr)
		http.ServeFile(w, r, detailPage)
	})

	log.Printf("Listening on port %s\n\n", port)
	http.ListenAndServe(":" + port, nil)
}