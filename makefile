MOCHA?=node_modules/.bin/mocha
REPORTER?=spec
FLAGS=--reporter $(REPORTER)
test:
	$(MOCHA) $(shell find test/* -prune -name "*-test.js") $(FLAGS)

.PHONY: test
