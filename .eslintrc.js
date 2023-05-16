'use strict';


const fs = require("fs");
const path = require("path");
module.exports = {
    "ignorePatterns": [
        ".eslintrc.js",
        ".idea/",
        "node_modules/",
        "coverage/",
        "build/",
        "build_cache/",
        "build_ts/",
        "dist/",
        "spec_data/",
    ],
    "env": {
        "es6": true,
        "es2021": true,
        "node": true,
        "browser": true,
        "jest": true,
        "jest/globals": true,
    },
    "plugins": [
        "promise",
        "unicorn",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false,
        "ecmaVersion": 2021,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
        "sourceType": "module",
    },
    "rules": {
        "spaced-comment": 0,
        "prettier/prettier": 0,

        "array-callback-return": [
            "error",
            {
                "allowImplicit": true,
                "checkForEach": true,
            },
        ],
        "no-promise-executor-return": "error",
        "no-constructor-return": "error",
        "no-unreachable-loop": "error",
        "require-atomic-updates": "error",
        "no-unmodified-loop-condition": "error",
        "no-self-compare": "error",
        "no-unused-vars": [
            "error",
            { "ignoreRestSiblings": true, "argsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" },
        ],
        "class-methods-use-this": "error",
        "no-magic-numbers": [
            "error",
            {
                "ignore": [
                    0, 1,
                ],
                "detectObjects": false,
                "enforceConst": true,
                "ignoreArrayIndexes": true,
                "ignoreDefaultValues": true,
            },
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": [
            "error",
            {
                "ignoreComments": true,
            },
        ],
        "padded-blocks": [
            "error",
            {
                "blocks": "never",
            },
            {
                "allowSingleLineBlocks": true,
            },
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 1,
                "maxBOF": 1,
                "maxEOF": 1,
            },
        ],
        "eol-last": "error",
        "eqeqeq": "error",
        "strict": 0,
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "ignore",
            },
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],
        "camelcase": 0,
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 0,
        "import/no-webpack-loader-syntax": 0,
        "import/prefer-default-export": 0,
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1,
                "ignoreComments": true,
                "flatTernaryExpressions": true,
                "ObjectExpression": 1,
                "ArrayExpression": 1,
                "FunctionExpression": {
                    "body": 1,
                    "parameters": 1,
                },
                "CallExpression": {
                    "arguments": 1,
                },
            },
        ],
        "jsx-a11y/aria-props": 0,
        "jsx-a11y/heading-has-content": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/role-has-required-aria-props": 0,
        "jsx-a11y/role-supports-aria-props": 0,
        "arrow-body-style": 0,
        "max-len": 0,
        "newline-per-chained-call": 0,
        "no-confusing-arrow": 0,
        "no-console": 0,
        "no-plusplus": 0,
        "no-void": 0,
        "no-continue": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": 0,
        "no-useless-escape": 0,
        "no-nested-ternary": 0,
        "no-shadow": 0,
        "no-param-reassign": 0,
        "func-names": 0,
        "prefer-arrow-callback": 0,
        "prefer-template": 0,
        "prefer-destructuring": 0,
        "prefer-const": [
            "error",
            {
                "destructuring": "all"
            }
        ],

        // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
        // Выключил, потому что нет ничего плохого в написании `if (!!item) {}`
        "no-extra-boolean-cast": 0,

        "require-yield": 0,
        //https://eslint.org/docs/latest/rules/brace-style
        "brace-style": [
            "warn",
            "stroustrup",
            {
                "allowSingleLine": true,
            },
        ],
        //https://eslint.org/docs/latest/rules/default-param-last
        "default-param-last": [ "error" ],
        // https://eslint.org/docs/latest/rules/semi
        "semi": [
            "error",
            "always",
        ],

        // https://eslint.org/docs/latest/rules/key-spacing
        "key-spacing": "error",
        // https://eslint.org/docs/latest/rules/keyword-spacing
        "keyword-spacing": [
            "error",
            {
                "after": true,
            },
        ],
        // https://eslint.org/docs/latest/rules/arrow-spacing
        "arrow-spacing": [ "error", { "before": true, "after": true } ],
        // https://eslint.org/docs/latest/rules/space-before-blocks
        "space-before-blocks": [ "error", { "functions": "always", "keywords": "always", "classes": "always" } ],
        // https://eslint.org/docs/latest/rules/generator-star-spacing
        "generator-star-spacing": [ "error", "before" ],
        // https://eslint.org/docs/latest/rules/space-before-function-paren
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always",
            },
        ],
        //https://eslint.org/docs/latest/rules/space-infix-ops
        "space-infix-ops": [
            "warn",
            {
                "int32Hint": false,
            },
        ],
        //https://eslint.org/docs/latest/rules/space-in-parens
        "space-in-parens": [
            "warn",
            "never",
        ],
        //https://eslint.org/docs/latest/rules/object-curly-spacing
        "object-curly-spacing": [
            "warn",
            "always",
        ],
        //https://eslint.org/docs/latest/rules/array-bracket-spacing
        "array-bracket-spacing": [
            "warn",
            "always",
        ],
        //https://eslint.org/docs/latest/rules/padding-line-between-statements
        "padding-line-between-statements": [
            "warn",
            {
                "blankLine": "always",
                "prev": "*",
                "next": [
                    "return", "break", "class", "continue", "do", "for", "if", "switch", "throw", "try", "while", "with",
                ],
            },
            {
                "blankLine": "always",
                "prev": "block-like",
                "next": "*",
            },
            {
                "blankLine": "always",
                "prev": [ "const", "let", "var" ],
                "next": "*",
            },
            {
                "blankLine": "always",
                "prev": "*",
                "next": [ "const", "let", "var" ],
            },
            {
                "blankLine": "any",
                "prev": [ "const", "let", "var" ],
                "next": [ "const", "let", "var" ],
            },
            {
                "blankLine": "any",
                "prev": "if",
                "next": "if",
            },
            {
                "blankLine": "any",
                "prev": "block-like",
                "next": "block-like",
            },
        ],
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-nesting.md
        "promise/no-nesting": 0,
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/avoid-new.md
        "promise/avoid-new": 0,
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-then.md
        "promise/prefer-await-to-then": 0,
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-callbacks.md
        "promise/prefer-await-to-callbacks": 0,
        "promise/always-return": 0,
        "unicorn/consistent-destructuring": 0,

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
        "unicorn/no-lonely-if": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
        "unicorn/better-regex": "warn",
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
        "unicorn/catch-error-name": [
            "error",
            {
                "ignore": [
                    "^error\\d*$",
                    "_error",
                    "err",
                ],
            },
        ],
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
        "unicorn/consistent-function-scoping": [
            "warn",
            {
                "checkArrowFunctions": false,
            },
        ],
        // todo: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md,
        // todo: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md
        "unicorn/no-unsafe-regex": "error",
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
        "unicorn/prevent-abbreviations": [
            "warn",
            {// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/rules/shared/abbreviations.js
                "allowList": {
                    "getInitialProps": true,
                },
                "replacements": {
                    "cmd": {
                        "command": true,
                    },
                    "errCb": {
                        "handleError": true,
                    },
                    "fn": {
                        "function": false,
                        "func": true,
                    },
                    "buf": {
                        "buffer": true,
                    },
                    "arg": false,
                    "acc": false,
                    "attr": false,
                    "btn": false,
                    "db": false,
                    "dev": false,
                    "dest": false,
                    "val": false,
                    "func": false,
                    "obj": false,
                    "param": false,
                    "params": false,
                    "prop": false,
                    "props": false,
                    "i": false,
                    "j": false,
                    "len": false,
                    "str": false,
                    "src": false,
                    "num": false,
                    "mod": false,
                    "doc": false,
                    "docs": false,
                    "err": false,
                    "args": false,
                    "prev": false,
                    "env": false,
                    "lib": false,
                    "ext": false,
                    "dir": false,
                    "tmp": false,
                    "temp": false,
                    "sep": false,
                    "var": false,
                    "vars": false,
                    "ref": false,
                    "conf": false,
                },
                "ignore": [
                    "Args$",
                    "Fn$",
                    "^func_",
                    "func",
                    "elem$",
                    "^KEY_",
                    "^eId",
                    "^_eId",
                    "_eId$",
                    "_vars$",
                    // ExecCmd, execCmd
                    "xecCmd$",
                ],
            },
        ],

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
        "unicorn/prefer-spread": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
        "unicorn/prefer-module": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
        "unicorn/filename-case": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
        "unicorn/new-for-builtins": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
        "unicorn/no-null": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
        "unicorn/no-new-array": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
        "unicorn/no-array-callback-reference": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
        "unicorn/no-unreadable-array-destructuring": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
        "unicorn/no-array-reduce": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
        "unicorn/prefer-object-from-entries": 0,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
        "unicorn/prefer-string-slice": 0,
        "unicorn/prefer-ternary": 0,
        // Отключил "no-nested-ternary" потому что, очень хочеться писать конструкции типа:
        /*
        const type = value === 1 ? 'type_1'
            : value === 2 ? 'type_2'
            : value === 3 ? 'type_3'
        ;
        */
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
        "unicorn/no-nested-ternary": 0,
        // Отключил "prefer-switch" потому что, в есть случаи, когда код написанный на if/else лучше читается чем switch/case
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
        "unicorn/prefer-switch": 0,
        // Отключил "unicorn/prefer-math-trunc", потому что, он ошибочно предлагает заменить `1 << 0` на Math.trunc в `const enum`.
        // Пример:
        // const enum MODES {
        //   red = 1 << 0,
        // }
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
        "unicorn/prefer-math-trunc": 0,
        // Для js-файлов "unicorn/import-style" выключен
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
        "unicorn/import-style": 0,
        // Для js-файлов "unicorn/numeric-separators-style" выключен
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
        "unicorn/numeric-separators-style": 0,
        // Для js-файлов "unicorn/prefer-optional-catch-binding" выключен
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
        "unicorn/prefer-optional-catch-binding": 0,
    },
    "overrides": [
        /*
        todo:
         Сейчас есть проблема в том, что "plugins" загружаются в не зависимости от того, какие файлы есть в проекте.
         Т.е., если проект, например, backend без React, всё равно у него в зависимостях нужно установить все используемые в
          этом файле "plugins", даже если в проекте не используется React, нужно установить "eslint-plugin-react" и "eslint-plugin-react-hooks".
         Это ограничение, ВОЗМОЖНО, можно будет убрать, если использовать НЕ ".eslintrc.json", а ".eslintrc.js" - в JS ерсии
          можно будет написать специальную логику для исключения не нужных на проекте правил и плагинов.
        */
        // -------------- JSX / TSX --------------
        {
            "plugins": [
                /**
                 * TODO:
                 *  If you are using the [new JSX transform from React 17]{@link https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports},
                 *  extend [react/jsx-runtime]{@link https://github.com/jsx-eslint/eslint-plugin-react/blob/c8917b0885094b5e4cc2a6f613f7fb6f16fe932e/index.js#L163-L176}
                 *  in your eslint config (add `"plugin:react/jsx-runtime"` to `"extends"`) to disable the relevant rules.
                 *
                 *  https://github.com/jsx-eslint/eslint-plugin-react
                 */
                "react",
                // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
                "react-hooks",
            ],
            "files": [
                "*.jsx",
                "*.tsx",
            ],
            "extends": [
                // https://github.com/jsx-eslint/eslint-plugin-react
                "plugin:react/recommended",
                // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
                "plugin:react-hooks/recommended",
            ],
            /*
            // todo: Выставить нужные по инструкции https://github.com/jsx-eslint/eslint-plugin-react#configuration
            // https://eslint.org/docs/latest/user-guide/configuring/configuration-files#adding-shared-settings
            "settings": {
              "react": {
                "createClass": "createReactClass", // Regex for Component Factory to use,
                // default to "createReactClass"
                "pragma": "React",  // Pragma to use, default to "React"
                "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
                "version": "detect", // React version. "detect" automatically picks the version you have installed.
                // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                // It will default to "latest" and warn if missing, and to "detect" in the future
                "flowVersion": "0.53" // Flow version
              },
              "propWrapperFunctions": [
                // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
                "forbidExtraProps",
                {"property": "freeze", "object": "Object"},
                {"property": "myFavoriteWrapper"},
                // for rules that check exact prop wrappers
                {"property": "forbidExtraProps", "exact": true}
              ],
              "componentWrapperFunctions": [
                // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
                "observer", // `property`
                {"property": "styled"}, // `object` is optional
                {"property": "observer", "object": "Mobx"},
                {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
              ],
              "formComponents": [
                // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
                "CustomForm",
                {"name": "Form", "formAttribute": "endpoint"}
              ],
              "linkComponents": [
                // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
                "Hyperlink",
                {"name": "Link", "linkAttribute": "to"}
              ]
            },
            */
        },

        // -------------- TypeScript --------------
        {
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint",
            ],
            "extends": [
                "plugin:@typescript-eslint/recommended",
            ],
            "files": [
                "*.ts",
                "*.mts",
                "*.cts",
                "*.tsx",
            ],
            "excludedFiles": [
                "node_modules/*",
            ],
            "parserOptions": {
                "ecmaVersion": 2020,
                // Specify it only for TypeScript files
                // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject
                "project": [
                    // tsconfig for project files without spec/spec_utils/spec_tools/spec_data
                    "./tsconfig.json",
                    // Для решения проблемы, что "@typescript-eslint" - правила не применяются для файлов отсутствующих в tsconfig.includes.
                    // todo: в каждом проекте должен быть свой "tsconfig.eslint.json", что не удобно, может быть сделать по-лучше
                    //  see https://stackoverflow.com/a/72842477
                    // tsconfig for spec/spec_utils/spec_tools/spec_data
                    fs.existsSync(path.join(process.cwd(), 'tsconfig.eslint.json')) ? './tsconfig.eslint.json' : void 0,
                ].filter(a => !!a),
            },
            "rules": {
                "space-before-blocks": "off",
                "prefer-destructuring": [
                    "error",
                    {
                        "VariableDeclarator": {
                            // Отключил для массивов, потому что код `const queueNumber = parts[1];` более наглядный чем `const [ , queueNumber ] = parts;`
                            "array": false,
                            "object": true,
                        },
                        "AssignmentExpression": {
                            "array": false,
                            "object": false,
                        },
                    },
                    {
                        "enforceForRenamedProperties": false,
                    },
                ],
                // Включаем только для typescript-файлов
                // https://eslint.org/docs/rules/prefer-template
                "prefer-template": "warn",

                // https://eslint.org/docs/latest/rules/semi
                "semi": "off",
                // https://typescript-eslint.io/rules/semi
                "@typescript-eslint/semi": [
                    "error",
                    "always",
                ],

                // note you must disable the base rule as it can report incorrect errors
                "no-magic-numbers": "off",
                // https://typescript-eslint.io/rules/no-magic-numbers
                "@typescript-eslint/no-magic-numbers": [
                    "error",
                    {
                        "ignore": [
                            // Нужно игнорировать 0 и 1 для:
                            // - `this.flag = new Int32Array(this._buffer, 0, 1);`
                            // - `if (this._queue.length === 0) {`
                            // - `void 0`
                            0, 1,
                        ],
                        "detectObjects": false,
                        "enforceConst": true,
                        "ignoreArrayIndexes": true,
                        "ignoreDefaultValues": true,
                        "ignoreEnums": true,
                        "ignoreNumericLiteralTypes": true,
                        "ignoreReadonlyClassProperties": true,
                        // Только в более свежей версии, чем та, что есть у нас:
                        //,"ignoreTypeIndexes": true
                    },
                ],

                // https://typescript-eslint.io/rules/prefer-as-const/
                "@typescript-eslint/prefer-as-const": "warn",
                // https://typescript-eslint.io/rules/prefer-ts-expect-error/
                "@typescript-eslint/prefer-ts-expect-error": "warn",
                // https://typescript-eslint.io/rules/prefer-function-type/
                "@typescript-eslint/prefer-function-type": "warn",
                // https://typescript-eslint.io/rules/prefer-enum-initializers/
                "@typescript-eslint/prefer-enum-initializers": "warn",
                // https://typescript-eslint.io/rules/prefer-optional-chain/
                "@typescript-eslint/prefer-optional-chain": "error",
                // // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
                // "@typescript-eslint/prefer-string-starts-ends-with": "error",
                // // https://typescript-eslint.io/rules/prefer-readonly/
                // "@typescript-eslint/prefer-readonly": "error",

                // todo:
                //  https://typescript-eslint.io/rules/prefer-readonly-parameter-types
                //  https://typescript-eslint.io/rules/prefer-return-this-type
                //  https://typescript-eslint.io/rules/promise-function-async
                //  // https://typescript-eslint.io/rules/strict-boolean-expressions
                //  "@typescript-eslint/strict-boolean-expressions": "warn",

                // https://typescript-eslint.io/rules/prefer-literal-enum-member/
                // Отключил "prefer-literal-enum-member" т.к. это правило не позволяет сослаться на EnumMember внутри одного Enum
                // "@typescript-eslint/prefer-literal-enum-member": [ "warn", { "allowBitwiseExpressions": true } ],
                "@typescript-eslint/prefer-literal-enum-member": 0,

                // https://typescript-eslint.io/rules/require-array-sort-compare
                "@typescript-eslint/require-array-sort-compare": ["error", { ignoreStringArrays: true }],
                // https://typescript-eslint.io/rules/sort-type-union-intersection-members
                "@typescript-eslint/sort-type-union-intersection-members": 0,
                // https://typescript-eslint.io/rules/switch-exhaustiveness-check
                "@typescript-eslint/switch-exhaustiveness-check": "error",

                "@typescript-eslint/no-namespace": 0,
                "@typescript-eslint/no-var-requires": 0,
                "@typescript-eslint/explicit-module-boundary-types": 0,
                "@typescript-eslint/ban-types": 0,

                "@typescript-eslint/no-explicit-any": 0,
                "@typescript-eslint/no-empty-function": 0,
                "@typescript-eslint/no-non-null-assertion": "warn",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    { "ignoreRestSiblings": true, "argsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" },
                ],
                "no-dupe-class-members": "off",
                "@typescript-eslint/no-dupe-class-members": [
                    "error",
                ],
                // Это правило будет периодически мешать, но полезность от него больше, чем неудобства.
                // https://eslint.org/docs/latest/rules/class-methods-use-this
                "class-methods-use-this": "error",
                //https://typescript-eslint.io/rules/default-param-last
                "default-param-last": "off",
                "@typescript-eslint/default-param-last": [ "error" ],
                // https://typescript-eslint.io/rules/comma-dangle
                "comma-dangle": "off",
                "@typescript-eslint/comma-dangle": [
                    "error",
                    {
                        "arrays": "always-multiline",
                        "objects": "always-multiline",
                        "imports": "always-multiline",
                        "exports": "always-multiline",
                        "enums": "always-multiline",
                        "generics": "always-multiline",
                        "tuples": "always-multiline",
                        "functions": "ignore",
                    },
                ],
                //https://typescript-eslint.io/rules/comma-spacing
                "comma-spacing": "off",
                "@typescript-eslint/comma-spacing": [
                    "error",
                    {
                        "before": false,
                        "after": true,
                    },
                ],

                "indent": "off",
                // see [[indent][meta issue] Problems with the indent rule](https://github.com/typescript-eslint/typescript-eslint/issues/1824)
                "@typescript-eslint/indent": [
                    2,
                    4,
                    {
                        "SwitchCase": 1,
                        "ignoreComments": true,
                        "flatTernaryExpressions": true,
                        "offsetTernaryExpressions": false,
                        "ObjectExpression": 1,
                        "ArrayExpression": 1,
                        "FunctionExpression": {
                            "body": 1,
                            "parameters": 1,
                        },
                        "CallExpression": {
                            "arguments": 1,
                        },
                        "ignoredNodes": [
                            "TSTypeParameterInstantiation",
                            "TypeAliasDeclaration",
                            "UnionType",
                            "TypeReference",
                            "TypeAlias",
                            "GenericTypeAnnotation",
                            "QualifiedTypeIdentifier",
                            "PropertyDefinition[decorators]",
                            "TSUnionType",
                        ],
                    },
                ],
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": 0,
                "no-use-before-define": "off",
                //https://typescript-eslint.io/rules/keyword-spacing
                "keyword-spacing": "off",
                "@typescript-eslint/keyword-spacing": [
                    "error",
                    {
                        "after": true,
                    },
                ],
                //https://typescript-eslint.io/rules/no-use-before-define/
                "@typescript-eslint/no-use-before-define": 0,/*
        // С этим правилом слишком много проблем. TypeScript и так очень хорошо определяет, когда к переменной
        //  обращаются ДО инициализации. А это правило слишком "строкое" (а по факту, придирчивое).
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            "functions": false,
            "classes": false,
            "enums": false,
            "typedefs": false,
            "ignoreTypeReferences": true
          }
        ],*/
                //https://typescript-eslint.io/rules/brace-style
                "brace-style": "off",
                "@typescript-eslint/brace-style": [
                    "error",
                    "stroustrup",
                    {
                        "allowSingleLine": true,
                    },
                ],
                //https://eslint.org/docs/latest/rules/space-before-function-paren
                "space-before-function-paren": [
                    "error",
                    {
                        "anonymous": "never",
                        "named": "never",
                        "asyncArrow": "always",
                    },
                ],
                //https://eslint.org/docs/latest/rules/space-infix-ops
                "space-infix-ops": [
                    "error",
                    {
                        "int32Hint": false,
                    },
                ],
                // https://typescript-eslint.io/rules/array-type
                "@typescript-eslint/array-type": [
                    "warn",
                    {
                        "default": "array",
                    },
                ],
                "@typescript-eslint/adjacent-overload-signatures": "error",
                //https://eslint.org/docs/latest/rules/space-in-parens
                "space-in-parens": [
                    "error",
                    "never",
                ],
                /* Для этого правила, нужно обновить "@typescript-eslint/eslint-plugin" на более свежую версию
                //https://typescript-eslint.io/rules/consistent-generic-constructors
                "@typescript-eslint/consistent-generic-constructors": [
                  "error",
                  "constructor"
                ],
                */
                // todo: В будущем, сделать "error" вместо "warn"
                //https://typescript-eslint.io/rules/consistent-type-exports
                "@typescript-eslint/consistent-type-exports": [
                    "warn",
                    {
                        "fixMixedExportsWithInlineTypeSpecifier": true,
                    },
                ],
                // todo: В будущем, сделать "error" вместо "warn"
                //https://typescript-eslint.io/rules/consistent-type-imports
                "@typescript-eslint/consistent-type-imports": [
                    "warn",
                    {
                        "prefer": "type-imports",
                        "disallowTypeAnnotations": false,
                    },
                ],

                // using "@typescript-eslint/no-floating-promises" instead of "promise/catch-or-return"
                "promise/catch-or-return": 0,
                //https://typescript-eslint.io/rules/no-floating-promises
                "@typescript-eslint/no-floating-promises": [
                    "error",
                    {
                        "ignoreVoid": true,
                        "ignoreIIFE": true,
                    },
                ],
                //https://typescript-eslint.io/rules/member-delimiter-style
                "@typescript-eslint/member-delimiter-style": [
                    "warn",
                    {
                        "multiline": {
                            "delimiter": "comma",
                            "requireLast": true,
                        },
                        "singleline": {
                            "delimiter": "comma",
                            "requireLast": false,
                        },
                        "overrides": {
                            "interface": {
                                "multiline": {
                                    "delimiter": "semi",
                                    "requireLast": true,
                                },
                            },
                        },
                    },
                ],

                // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-then.md
                "promise/prefer-await-to-then": "warn",
                // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-callbacks.md
                "promise/prefer-await-to-callbacks": "warn",
                // Включаем только для typescript-файлов
                // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-nesting.md
                "promise/no-nesting": "warn",

                // Для ts-файлов "unicorn/import-style" включен
                // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
                "unicorn/import-style": "warn",
                // Для ts-файлов "unicorn/numeric-separators-style" включен
                // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
                "unicorn/numeric-separators-style": "warn",
                // Для ts-файлов "unicorn/prefer-optional-catch-binding" включен
                // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
                "unicorn/prefer-optional-catch-binding": "warn",
            },
        },

        // -------------- TypeScript .d.ts --------------
        {
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint",
            ],
            "extends": [
                "plugin:@typescript-eslint/recommended",
            ],
            "files": [
                "*.d.ts",
            ],
            "excludedFiles": [
                "node_modules/*",
            ],
            "parserOptions": {
                "ecmaVersion": 2020,
                "project": [
                    "./tsconfig.json",
                    fs.existsSync(path.join(process.cwd(), 'tsconfig.eslint.json')) ? './tsconfig.eslint.json' : void 0,
                ].filter(a => !!a),
            },
            "rules": {
                "@typescript-eslint/no-magic-numbers": 0,
                "no-magic-numbers": 0,
            },
        },

        // -------------- Test files / tests / spec --------------
        {
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint",
                "jest",
            ],
            "extends": [
                "plugin:@typescript-eslint/recommended",
                "plugin:jest/recommended",
                "plugin:jest/style",
            ],
            "files": [
                "*_spec.ts",
                "*_spec.mts",
                "*_spec.cts",
                "*_spec.tsx",
            ],
            "excludedFiles": [
                "node_modules/*",
            ],
            "parserOptions": {
                "ecmaVersion": 2020,
                "project": [
                    "./tsconfig.json",
                    fs.existsSync(path.join(process.cwd(), 'tsconfig.eslint.json')) ? './tsconfig.eslint.json' : void 0,
                ].filter(a => !!a),
            },
            "rules": {
                "jest/valid-describe-callback": 0,
                "jest/consistent-test-it": [
                    "error",
                    {
                        "fn": "test",
                        "withinDescribe": "it",
                    },
                ],
                "jest/require-top-level-describe": [
                    "error",
                    {
                        "maxNumberOfTopLevelDescribes": 1,
                    },
                ],
                "jest/no-duplicate-hooks": "error",
                "jest/prefer-called-with": "warn",
                "jest/prefer-comparison-matcher": "warn",
                "jest/prefer-equality-matcher": "warn",
                "jest/prefer-expect-resolves": "warn",
                "jest/prefer-hooks-on-top": "warn",
                "jest/prefer-todo": "warn",
                "jest/require-to-throw-message": "warn",
                "jest/valid-expect": "error",
                "jest/valid-expect-in-promise": "error",
                "jest/valid-title": "error",

                //https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
                "@typescript-eslint/unbound-method": "off",
                "jest/unbound-method": [
                    "error",
                    {
                        "ignoreStatic": true,
                    },
                ],

                //https://typescript-eslint.io/rules/no-magic-numbers
                "@typescript-eslint/no-magic-numbers": 0,
                //https://typescript-eslint.io/rules/no-namespace
                "@typescript-eslint/no-namespace": 0,
                // //https://typescript-eslint.io/rules/explicit-module-boundary-types
                // "@typescript-eslint/explicit-module-boundary-types": 0,
                // Для тестов нам не нужно правило "class-methods-use-this"
                // //https://typescript-eslint.io/rules/class-methods-use-this
                // "@typescript-eslint/class-methods-use-this": 0,
                //https://typescript-eslint.io/rules/no-shadow
                "@typescript-eslint/no-shadow": 0,
                //https://typescript-eslint.io/rules/no-use-before-define/
                "@typescript-eslint/no-use-before-define": 0,
                //https://typescript-eslint.io/rules/consistent-type-exports
                "@typescript-eslint/consistent-type-exports": 0,
                //https://typescript-eslint.io/rules/consistent-type-imports
                "@typescript-eslint/consistent-type-imports": 0,
                //https://typescript-eslint.io/rules/no-non-null-assertion
                "@typescript-eslint/no-non-null-assertion": 0,
                // //https://typescript-eslint.io/rules/no-floating-promises
                // "@typescript-eslint/no-floating-promises": 0,
                //https://typescript-eslint.io/rules/no-var-requires
                "@typescript-eslint/no-var-requires": 0,
                //https://typescript-eslint.io/rules/no-empty-function
                "@typescript-eslint/no-empty-function": 0,
                //https://typescript-eslint.io/rules/ban-types
                "@typescript-eslint/ban-types": 0,
                //https://typescript-eslint.io/rules/no-explicit-any
                "@typescript-eslint/no-explicit-any": 0,

                // Для тестов это правило не так важно
                // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/always-return.md
                "promise/always-return": 0,
                // Для тестов это правило не так важно
                // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-then.md
                "promise/prefer-await-to-then": 0,
                // Для тестов это правило не так важно
                // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-callbacks.md
                "promise/prefer-await-to-callbacks": 0,

                // Для тестов это правило не так важно
                // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
                "unicorn/prevent-abbreviations": 0,
                // Для тестов это правило не так важно
                // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
                "unicorn/no-useless-spread": 0,
                // Для тестов это правило не важно
                // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
                "unicorn/numeric-separators-style": 0,
            },
        },
    ],
    "globals": {
        "__WEB__": true,
        "globalThis": true,
        "fetch": true,
        "Reflect": true,
        "BigInt": true,
        "t": true,
        "jt": true,
    },


};
