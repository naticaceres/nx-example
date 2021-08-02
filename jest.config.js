const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/store',
    '<rootDir>/libs/shared-components',
    '<rootDir>/libs/assets',
  ],
};
