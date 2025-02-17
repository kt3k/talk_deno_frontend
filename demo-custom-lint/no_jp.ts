// inspired by https://github.com/K-Sato1995/eslint-plugin-no-jp/blob/master/lib/rules/noJpIdentifier.ts

export default {
  name: "no-jp",
  rules: {
    "no-jp": {
      create(context) {
        return {
          Identifier(node) {
            if (includeJa(node.name)) {
              context.report({
                node,
                message: "日本語の変数名は使用しないでください",
              });
            }
          },
        };
      },
    },
  },
} satisfies Deno.lint.Plugin;


const includeJa = (str: string) => {
  const regexPattern = new RegExp(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]/)
  return regexPattern.test(str)
}
