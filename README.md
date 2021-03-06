# Dictionary
command line dictionary 

# Prerequisite
> node --v

```sh
v8.11.4
```
# Installation

> A simple CLI tool for ensuring that a given script runs continuously.

```sh
npm i -g lint-staged husky eslint prettier
```

> Clone the repo

```sh
git clone https://github.com/heartstchr/dic.git 
```

> Making index.js file executable 

```sh
npm link
```

> Install the dependency

```sh
npm i
```

> Command to get help

```sh
        dic --help

        |  _ \  (_)   ___  | |_  (_)   ___    _ __     __ _   _ __   _   _ 
        | | | | | |  / __| | __| | |  / _ \  | '_ \   / _` | | '__| | | | |
        | |_| | | | | (__  | |_  | | | (_) | | | | | | (_| | | |    | |_| |
        |____/  |_|  \___|  \__| |_|  \___/  |_| |_|  \__,_| |_|     \__, |
                                                                      |___/ 
        Usage: dic [options] [command]

        command line dictionary

        Options:
        -V, --version              output the version number
        -h, --help                 output usage information

        Commands:
        getDefinations|def <word>  Get definations
        getSynonyms|syn <word>     Get synonyms
        getAntonyms|ant <word>     Get antonyms
        getExamples|ex <word>      Get Examples
        getFullDict|fdict <word>   Get Full Dict
        getWordOfDay|wod           Get Word Of Day
        getWordGame|play           Get Word Game
```