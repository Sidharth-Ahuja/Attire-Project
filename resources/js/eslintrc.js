module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': 0,

    'no-undef': 2,
    'no-var': 2,
    'no-unused-vars': [1, { vars: 'all', args: 'none' }],
    'no-use-before-define': 0,
    'func-call-spacing': 2, // standard warn, men jeg synes error!

    semi: 2,
    'no-empty': 1,
    'no-constant-condition': 1, // giver kun en warning, fordi vi godt må bruge nogle til test

    // ikke nødvendigt på 1.sem, men god praksis:
    'no-unsafe-negation': 1,

    // http://eslint.org/docs/rules/#best-practices
    curly: 2,
    // === - er det virkelig vigtigt?
    //        "eqeqeq": [2, "smart"],

    // Giv advarsler ved brug af alert!
    'no-alert': 1,
    'no-else-return': 1,

    // giv fejl, fordi der skal stå console.log!
    'no-empty-function': 2,

    // warning hvis man kommer til at konkatenere string og tal
    'no-implicit-coercion': 2,

    'no-implied-eval': 2,
    // tillad at bruge this i eventlisteners under strict-mode:
    'no-invalid-this': 0,
    'no-lone-blocks': 2,

    // kun relevant for for-løkker
    'no-loop-func': 2,
    'no-multi-str': 2,

    'no-param-reassign': 2,
    'no-redeclare': 2, // god at have - finder gentagne functions
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,

    'wrap-iife': [2, 'outside'],
    // http://eslint.org/docs/rules/#strict-mode
    strict: 0, // vi bruger ikke strict endnu ...
    // http://eslint.org/docs/rules/#variables
    'no-shadow-restricted-names': 2,
    // giv en fejl, for at hjælpe mod værre fejl!
    'no-shadow': 2,

    // http://eslint.org/docs/rules/#stylistic-issues
    'block-spacing': 1,

    // kræv at kode er splittet op i flere linjer:
    'brace-style': [1, '1tbs', { allowSingleLine: false }],

    camelcase: 2, // finder dog ikke stort begyndelsesbogstav ... kig på id-match
    'comma-dangle': 2, // giv error for at gøre klar til JSON
    'comma-spacing': 0,
    'comma-style': [1, 'last'],

    // Tillad tomme linjer til sidst ...
    'eol-last': 0,

    // hold styr på mellemrum ved funktioner - og linjelængder
    'func-call-spacing': 2,
    indent: [1, 4],
    //        "indent": ["error", "tab"],
    'max-len': [1, 120],

    // god ide til at undgå fejl ved | i stedet for ||
    'no-bitwise': 2,

    'no-trailing-spaces': 1,
    'semi-spacing': 2,
  },
  globals: {
    $: false,
    brackets: false,
    clearTimeout: false,

    console: false,
    alert: false,

    define: false,
    require: false,
    setTimeout: false,

    window: false,
    ArrayBuffer: false,
    Uint32Array: false,
    WebSocket: false,
    XMLHttpRequest: false,
  },
};
