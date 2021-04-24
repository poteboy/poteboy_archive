

gatsbyにtypescriptを導入するために以下をgatsby-config.jsに追加する
```ts:gatsby-config.js
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      }
    }
```

graphql playgroundを有効化するためにpackage.jsonのdevelopを以下のように編集する

```ts:package.json
"develop": "GATSBY_GRAPHQL_IDE=playground gatsby develop",
```