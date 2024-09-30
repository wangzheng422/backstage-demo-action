# backstage-plugin-scaffolder-backend-module-wzh-custom-actions

The wzh-custom-actions module for [@backstage/plugin-scaffolder-backend](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend).

_This plugin was created through the Backstage CLI_

reference:
- https://github.com/janus-idp/backstage-plugins/tree/main/plugins/scaffolder-annotator-action
- https://github.com/janus-idp/backstage-showcase/tree/main/dynamic-plugins/wrappers/backstage-plugin-dynatrace
- https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/dynamic-plugins.md
- https://github.com/janus-idp/backstage-plugins/tree/main/plugins/quay-actions

```bash
# prepare some command line
yarn add --dev @backstage/cli

yarn backstage-cli new


yarn add --dev @janus-idp/cli

# yarn add @backstage/cli
# yarn add @janus-idp/cli

yarn global add @backstage/cli
yarn global add @janus-idp/cli

# yarn install


yarn backstage-cli repo fix --publish

npm pkg fix

# build the program with these
yarn tsc
yarn export-dynamic --no-install --clean
yarn install --production


# npx 

# login to npm
npm login

# and publish the dynamic plugin to npm registry
cd dist-dynamic 

npm publish

cd ..

```

`@wangzheng422/backstage-plugin-scaffolder-backend-module-wzh-custom-actions-dynamic`