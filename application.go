package main

import (
	"log"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"os"
	"text/template"
)

// Pages
const indexPage = "public/arto-web/template/page/index.html"
const detailPage = "public/arto-web/template/page/detail.html"

// Partials
const headerPartial = "public/arto-web/template/partial/header.html"
const artItemPartial = "public/arto-web/template/partial/art_item.html"

type Art struct {
	ID string
    Title string
    Body string
}

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    data := map[string]interface{}{
		"Items": []Art{
			Art{ID: "1", Title: "Art1", Body: "Ray Marching"},
			Art{ID: "2", Title: "Art2", Body: "Delauney Triangle"},
			Art{ID: "3", Title: "Art3", Body: "Easing"},
			Art{ID: "4", Title: "Art4", Body: "Sphere"},
		},
	}

	t, _ := template.ParseFiles(indexPage, headerPartial, artItemPartial)
	t.ExecuteTemplate(w, "index", data)
}

func Detail(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    t, _ := template.ParseFiles(detailPage, headerPartial)
	t.ExecuteTemplate(w, "detail", ps.ByName("id"))
}

func main() {
	router := httprouter.New()

	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	router.GET("/", Index)
    router.GET("/detail/:id", Detail)

	log.Printf("Listening on port %s\n\n", port)
	http.ListenAndServe(":" + port, router)
}