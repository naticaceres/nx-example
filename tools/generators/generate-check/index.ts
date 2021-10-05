import { Tree, formatFiles, names } from '@nrwl/devkit';
import {
  libraryGenerator,
  storybookConfigurationGenerator,
} from '@nrwl/angular/generators';
import { transformFile } from '../utilities/transform';
import { prefixIdentifierTransformer } from '../utilities/prefix-identifier';
import { Linter } from '@nrwl/linter';

export default async function (host: Tree, schema: Schema) {
  await libraryGenerator(host, {
    name: schema.name,
    publishable: true,
    importPath: `@bg-hoard/${schema.name}`,
    //style: 'scss',
    prefix: 'byt',
    strict: true,
  });

  // Get the expected module name
  const moduleName = names(schema.name).className + 'Module';

  // prefix the module name
  transformFile(host, 'libs/test11/src/lib/test11.module.ts', [
    prefixIdentifierTransformer(''),
  ]);

  // setup storybook
  await storybookConfigurationGenerator(host, {
    name: schema.name,
    configureCypress: false,
    generateStories: false,
    generateCypressSpecs: false,
    linter: Linter.EsLint, //Exclude<Linter, Linter.TsLint>;
    //cypressDirectory?: string;
  });

  await formatFiles(host);
}

interface Schema {
  name: string;
}
