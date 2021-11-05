'use strict'

function getCurrentPage(pageName, data) {
	const page = require(`./pages/${pageName}`);

	return page(data);
}

module.exports = function mainUi(data) {
	return {
		root: getCurrentPage(data.page, data)
	};
}