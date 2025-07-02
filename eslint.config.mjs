import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

export default [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            prettier,
            react,
            "@typescript-eslint": tseslint.plugin,
        },

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                    semi: true,
                    singleQuote: false,
                    trailingComma: "es5",
                    tabWidth: 4,
                },
            ],

            "no-unused-vars": 1,
            "no-undef": 1,

            semi: ["error", "always"],
            quotes: ["error", "double"],
        },
    },
];
