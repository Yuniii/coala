package main

import (
	"net/http"
)

func init() {
	http.HandleFunc("/", e404)
}

func e404(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotFound)
	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte("404"))
}
