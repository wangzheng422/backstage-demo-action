import { createAnnotatorAction } from '@janus-idp/backstage-scaffolder-backend-module-annotator';

export const createAddCompanyTitleAction = () => {
  return createAnnotatorAction(
    'wzhcatalog:company-title',
    'Creates a new `catalog:company-title` Scaffolder action to annotate scaffolded entities with the company title.',
    'Annotating catalog-info.yaml with the company title',
  );
};