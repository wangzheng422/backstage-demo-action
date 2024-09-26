import { BackendDynamicPluginInstaller } from '@backstage/backend-dynamic-feature-service';

import { createAcmeExampleAction } from '../actions';

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
  kind: 'legacy',
  scaffolder: () => [createAcmeExampleAction()],
};