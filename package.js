Package.describe({
  summary: " Add comments to docs ",
  version: "1.0.0",
  git: "https://github.com/sasikanth513/meteor-comments.git"
});

both = ['client','server'];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use(['templating','aldeed:collection2@1.0.0','aldeed:autoform@1.0.0'],both);
  api.addFiles(['lib/both/collections.js'],	both);
  api.addFiles(['lib/client/templates.html','lib/client/templates.js'],	'client');
  api.addFiles(['lib/server/allow.js','lib/server/publish.js'],	'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('comments');
  api.addFiles('comments-tests.js');
});

