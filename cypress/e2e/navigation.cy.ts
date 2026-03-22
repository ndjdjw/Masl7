{
"root": true,
"ignorePatterns": [".next/", "out/", "build/", "cypress/videos/", "cypress/screenshots/"],
"overrides": [
{
"files": ["src//*.{ts,tsx}", "pages//.{ts,tsx}", "_app.tsx", "_document.tsx"],
"parser": "@typescript-eslint/parser",
"parserOptions": {
"project": "./tsconfig.json",
"tsconfigRootDir": ".",
"ecmaFeatures": {
"jsx": true
}
},
"extends": [
"eslint:recommended",
"plugin:react/recommended",
"plugin:@typescript-eslint/recommended",
"plugin:react-hooks/recommended",
"next/core-web-vitals"
],
"plugins": ["@typescript-eslint", "react", "react-hooks"],
"rules": {
"react/react-in-jsx-scope": "off",
"react/jsx-uses-react": "off",
"@typescript-eslint/explicit-module-boundary-types": "off"
}
},
{
"files": ["cypress/**/.ts", "cypress//*.tsx", "/.spec.ts", "**/.spec.tsx", "/*.test.ts", "/.test.tsx"],
"parser": "@typescript-eslint/parser",
"parserOptions": {
"ecmaFeatures": {
"jsx": true
}
},
"env": {
"cypress/globals": true,
"jest": true,
"browser": true,
"node": true
},
"plugins": ["cypress"],
"extends": ["plugin:cypress/recommended"],
"rules": {}
},
{
"files": ["**/.js"],
"parserOptions": {
"ecmaVersion": 2021,
"sourceType": "module"
}
}
]
}
