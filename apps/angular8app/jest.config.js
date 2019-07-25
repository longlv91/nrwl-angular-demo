module.exports = {
  name: 'angular8app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular8app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
