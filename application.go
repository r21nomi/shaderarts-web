package main

import (
	"log"
	"net/http"
	"os"
	"text/template"
)

type Art struct {
	ID string
    Title string
    Body int
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	// Pages
	const indexPage = "public/arto-web/template/page/index.html"
	const detailPage = "public/arto-web/template/page/detail.html"

	// Partials
	const headerPartial = "public/arto-web/template/partial/header.html"
	const artItemPartial = "public/arto-web/template/partial/art_item.html"

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]interface{}{
			"Items": []Art{
				Art{ID: "1", Title: "Art1", Body: 300},
				Art{ID: "2", Title: "Art2", Body: 500},
				Art{ID: "3", Title: "Art3", Body: 600},
				Art{ID: "4", Title: "Art4", Body: 300},
			},
		}

		t, _ := template.ParseFiles(indexPage, headerPartial, artItemPartial)
		t.ExecuteTemplate(w, "index", data)
	})

	// TODO: Handle "/detail/{ID}"
	http.HandleFunc("/detail", func(w http.ResponseWriter, r *http.Request) {
		t, _ := template.ParseFiles(detailPage, headerPartial)
		t.ExecuteTemplate(w, "detail", "")
	})

	log.Printf("Listening on port %s\n\n", port)
	http.ListenAndServe(":" + port, nil)
}