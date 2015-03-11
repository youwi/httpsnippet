package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {
	client := &http.Client{}
	url := "http://mockbin.com/har"
	payload := "{\"number\": 1, \"string\": \"f\\\"oo\", \"arr\": [1, 2, 3], \"nested\": {\"a\": \"b\"}, \"arr_mix\": [1, \"a\", {\"arr_mix_nested\": {}}] }"
	req, _ := http.NewRequest("POST", url, strings.NewReader(payload))
	req.Header.Add("content-type", "application/json")
	res, _ := client.Do(req)
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	fmt.Println(res)
	fmt.Println(string(body))
}