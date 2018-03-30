module.exports = {
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": [
      "jsdoc"
    ]
  },
  "recurseDepth": 20,
  "source": {
    "include": [
      // input
      "./src",
      "./test",
    ],
    "includePattern": ".+\\.(js)$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": true,
    "useLongnameInNav": false,
    "showInheritedInNav": true
  },
  "opts": {
    // ouput
    "destination": "./docs/",
    "encoding": "utf8",
    "private": true,
    "recurse": true,
    // minami
    "template": "./node_modules/minami"
  }
}
