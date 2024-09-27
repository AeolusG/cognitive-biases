install:
	npm install

lint:
	npx stylelint ./src/styles/*.css
	npx htmlhint ./src/*.html

deploy:
	npx surge ./src/

minify: 
	gulp concat

autoprefix:
	gulp add-prefix

optimize:
	gulp optimize-img