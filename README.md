# vport2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




### firebase not found
npm bin -g
export PATH=$PATH:`npm bin -g`  


### firestore basic code 
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2020, 11, 24);
    }
  }
}

### firebase item._id
<template v-slot:[`item._id`]="{ item }">

### firebase node 10 version upgrade


### node module change
https://www.npmjs.com/package/n
$ sudo n 10.8
$ sudo n stable 이런식..