'use strict';
const alfy = require('alfy');
const fuzzy = require('fuzzy');
const fs = require('fs');

//failsafes to run in other envs - dont run it if string is small
const input = alfy.input;
if (!input || input.length < 2) {
	return
}

let tabArr = process.env.tabOrder || 'mt,goons,disney,gchat,fb,rga,class,ed,gm';
tabArr = tabArr.split(',');
let results = fuzzy.filter(alfy.input.toLowerCase() || 'mt', tabArr);

if (results.length > 0) {
	alfy.output(results.map((e, i) => {
		const {string, index} = e;
		
		const serviceName = string.toLowerCase();
		let icon = {};

		let iconsArray = JSON.parse(fs.readFileSync('custom_icons.json', 'utf8'));
		iconsArray.forEach(element => {
			if (serviceName.includes(element.name)) {
				icon["path"] = element.path;
			}
		});

		return {
			title: `${string}`,
			subtitle: `Position: ${index}!`,
			"icon": icon,
			arg: `${index + 1}`
		}
	}));

} else {
	alfy.output([
		{
			title: `No Matching Rambox Tabs Found!`,
			subtitle: 'Well... Open Rambox anyway =)',
			arg: 'NA'
		}
	])
}