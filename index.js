// https://astexplorer.net

module.exports = {
  rules: {
    'async-function-suffix': {
      meta: {
        fixable: 'code',
        type: 'suggestion',
      },
      create(context) {
        return {
          FunctionDeclaration(node) {
            if (node.async && !node.id.name.endsWith('Async')) {
              context.report({
                node,
                message: 'Async functions should have a "Async" suffix: {{ name }}Async',
                data: { name: node.id.name },
                fix(fixer) {
                  return fixer.replaceText(node.id, `${node.id.name}Async`)
                },
              })
            }
          },
        }
      },
    },
  },
}
