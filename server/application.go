package main

import (
	"log"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"os"
	"text/template"
	"path/filepath"
)

var executableDir = getExecutableDir()

// Pages (set from executable directory since working directory will change depend on the directory where the program was executed.)
var indexPage = executableDir + "/public/template/page/index.html"
var detailPage = executableDir + "/public/template/page/detail.html"

// Partials
var headerPartial = executableDir + "/public/template/partial/header.html"
var artItemPartial = executableDir + "/public/template/partial/art_item.html"

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
		port = "9000"
	}

	router.GET("/", Index)
    router.GET("/detail/:id", Detail)

	log.Printf("Listening on port %s\n\n", port)
	http.ListenAndServe(":" + port, router)
}

/**
 * Get directory where executable file is located.
 */
func getExecutableDir() string {
	exe, _ := os.Executable()
	wd := filepath.Dir(exe)
    log.Println("Executable directory : " + wd)
	return wd
}