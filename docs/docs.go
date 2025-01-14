package main

import (
	"bytes"
	"fmt"
	"io/fs"
	"os"
	"regexp"
	"strings"
)

const (
	COMPONENTS_FILE_MD = "./generated/components.md"
	FUNCTIONS_FILE_MD  = "./generated/functions.md"
	TYPES_FILE_MD      = "./generated/types.md"
)

var (
	FUNCTION_PATTERN  = regexp.MustCompile(`function (?P<Name>\w+)\((\n*\s*)((\{([^:]+)\})|(\w+)): (\w+)`)
	INTERFACE_PATTERN = regexp.MustCompile(`interface (?P<Name>\w+)`)
	TYPE_PATTERN      = regexp.MustCompile(`type (?P<Name>\w+)`)

	allComponents = map[string]map[string]string{}
	allFunctions  = map[string]map[string]string{}
	allTypes      = map[string]map[string]string{}
)

func main() {
	fmt.Println("hello!")
	err := scanDir("../lib")
	if err != nil {
		panic(err)
	}

	err = writeTypes()
	if err != nil {
		panic(err)
	}

	err = writeFunctions()
	if err != nil {
		panic(err)
	}

	err = writeComponents()
	if err != nil {
		panic(err)
	}
}

// Functions:

func scanDir(dir string) error {
	entries, err := os.ReadDir(dir)
	if err != nil {
		return err
	}

	for _, entry := range entries {
		path := fmt.Sprintf("%s/%s", dir, entry.Name())

		if entry.IsDir() {
			err = scanDir(path)
			if err != nil {
				return err
			}
		} else {
			err = scanFile(path, entry)
			if err != nil {
				return err
			}
		}
	}

	return nil
}

func scanFile(path string, entry fs.DirEntry) error {
	content, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	contentStr := string(content)

	types := TYPE_PATTERN.FindStringSubmatch(contentStr)
	interfaces := INTERFACE_PATTERN.FindStringSubmatch(contentStr)
	functions := FUNCTION_PATTERN.FindStringSubmatch(contentStr)

	fileTypes, ok := allTypes[path]
	if !ok {
		fileTypes = make(map[string]string)
		allTypes[path] = fileTypes
	}

	fileFuncs, ok := allFunctions[path]
	if !ok {
		fileFuncs = make(map[string]string)
		allFunctions[path] = fileFuncs
	}

	fileComps, ok := allComponents[path]
	if !ok {
		fileComps = make(map[string]string)
		allComponents[path] = fileComps
	}

	if types != nil {
		fileTypes[types[1]] = "YEP"
	}

	if interfaces != nil {
		fileTypes[interfaces[1]] = "YEP"
	}

	var firstLetter string

	if functions != nil {
		firstLetter = string(functions[1][0])
		if strings.ToLower(firstLetter) == firstLetter {
			fileFuncs[functions[1]] = "YEP"
		} else {
			fileComps[functions[1]] = fmt.Sprintf("Props: [%[1]s](%[2]s#%[1]s)", functions[7], TYPES_FILE_MD)
		}
	}

	return nil
}

func writeTypes() error {
	buffer := &bytes.Buffer{}

	for path, m := range allTypes {
		for t, body := range m {
			buffer.WriteString(fmt.Sprintf("## %s\n\n> [Go to](%s)\n\n%s\n\n", t, path, body))
		}
	}

	return os.WriteFile(TYPES_FILE_MD, buffer.Bytes(), 0600)
}

func writeFunctions() error {
	buffer := &bytes.Buffer{}

	for path, m := range allFunctions {
		for t, body := range m {
			buffer.WriteString(fmt.Sprintf("## %s\n\n> [Go to](%s)\n\n%s\n\n", t, path, body))
		}
	}

	return os.WriteFile(FUNCTIONS_FILE_MD, buffer.Bytes(), 0600)
}

func writeComponents() error {
	buffer := &bytes.Buffer{}

	for path, m := range allComponents {
		for t, body := range m {
			buffer.WriteString(fmt.Sprintf("## %s\n\n> [Go to](%s)\n\n%s\n\n", t, path, body))
		}
	}

	return os.WriteFile(COMPONENTS_FILE_MD, buffer.Bytes(), 0600)
}
