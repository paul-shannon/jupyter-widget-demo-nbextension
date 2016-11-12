default:
	(cd js; npm update)
	(cd js; webpack --config webpack.config.js)
	pip install -e .
	jupyter nbextension install --py circles
	jupyter nbextension enable --py --sys-prefix circles
	jupyter notebook circles.ipynb 

clean:
	- rm -rf js/node_modules/*
	- rm -rf js/dist/*
	- rm -rf circles/static/*