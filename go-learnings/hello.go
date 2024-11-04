package main

import (
	"fmt"
	"strings"

	"rsc.io/quote"
)

func main(){
	var somto string = "Somto"
	someNumber := 1234
	someNumber++
	fmt.Println(strings.Split(somto, "o"))
	fmt.Println("Hello, World!")
	fmt.Println(quote.Go())
}