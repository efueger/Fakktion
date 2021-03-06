### Create Database diagram
```
rake erd
```
### Fully reset DB and redo all migrations
```
rake db:migrate:reset
```
### git return file state to previous commit
```
git reset --hard
```
### Rebuild Secrets.yml
	*Create secrets.yml on config folder with the following 
		```
		development:
			secret_key_base: xxx
		test:
			secret_key_base: xxx
		production:
			secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
		```
	*Use rake secret for new keys

### Bundler commands
```
http://bundler.io/v1.5/commands.html
```
### Testing json response
```
http://localhost:3000/api/v1/genres.json // for all of them
http://localhost:3000/api/v1/genres/1.json // for individual response
```
### Clear Cache
```
rake tmp:clear
```
### fix public SSH key issue
```
ssh-add -l (The agent has no identities message will shown up)
ssh-add "Key"
ssh-add -l (to verify agent)
```
### Update Ember-CLI
```
npm uninstall -g ember-cli
npm cache clean
bower cache clean
npm install -g ember-cli
rm -rf node_modules bower_components dist tmp
npm install --save-dev ember-cli
add "ember-simple-auth": "0.8.0" to bower.json
bower install
ember install ember-cli-simple-auth
ember init -- Generate new project blueprint... Make sure to review diff!
rake start and install any mising add-on	
```
### Validating .travis.yml files
```
travis-lint command from main folder
```
### Encrypt secrets through Travis CI
```
travis login --org
travis encrypt-file config/secrets.yml --add
```
