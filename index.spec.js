const { RuleTester } = require('eslint')
const { rules } = require('./index')

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } })

ruleTester.run('async-function-suffix', rules['async-function-suffix'], {
  valid: [
    {
      code: `
        async function funcAsync() {
          return true
        }
      `,
    },
  ],

  invalid: [
    {
      code: `
        async function func() {
          return true
        }
      `,
      errors: [{ message: 'Async functions should have a "Async" suffix: funcAsync' }],
      output: `
        async function funcAsync() {
          return true
        }
      `,
    },
  ],
})
