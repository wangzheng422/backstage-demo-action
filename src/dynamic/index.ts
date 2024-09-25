import { BackendDynamicPluginInstaller } from '@backstage/backend-dynamic-feature-service';

import {
    createAddCompanyTitleAction,
} from '../actions';

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
  kind: 'legacy',
  scaffolder: () => [
    createAddCompanyTitleAction(),
  ],
};