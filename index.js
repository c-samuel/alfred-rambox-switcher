'use strict';
const alfy = require('alfy');
const builtinModules = require('builtin-modules/static');
const osa = require('node-osascript')

let tabArr = process.env.tabOrder || 'mt,goons,disney,gchat,fb,rga,class,ed,gm';
tabArr = tabArr.split(',');
const index = tabArr.indexOf(alfy.input.toLowerCase() || 'mt');

if (index != -1) {

	alfy.output([{
		title: `found it : ${index}`
	}])

	osa.executeFile(
		'applescripts/rambox_switch.applescript', {idx: index + 1},
		(err, results, raw) => {
			if (err) {
				throw err;
			}
		});


} else {
	alfy.output([{
		title: `tab not found!`
	}])
}

// const ret = tabArr.map((e, i) => {
// 	return {
// 		title: 'joe',
// 		arg: i
// 	}
// });
//
// alfy.output(ret);





// const http = require('http');



// const dateFormat = require('date-format');
//
// // Do not boost exact matches by default, unless specified by the input
// const q = /boost-exact:[^\s]+/.test(alfy.input) ? alfy.input : `${alfy.input} boost-exact:false`;
//
// alfy.fetch('https://api.npms.io/v2/search', {
// 	query: {
// 		q,
// 		size: 20
// 	}
// }).then(data => {
// 	const items = data.results
// 		.filter(x => x.package.name.length > 1)
// 		.map(x => {
// 			const pkg = x.package;
//
// 			return {
// 				title: pkg.name,
// 				subtitle: pkg.description,
// 				arg: pkg.links.repository || pkg.links.npm,
// 				mods: {
// 					alt: {
// 						arg: pkg.links.npm,
// 						subtitle: 'Open the npm page instead of the GitHub repo'
// 					},
// 					cmd: {
// 						subtitle: `${pkg.version} published at ${dateFormat('yyyy-dd-MM', new Date(pkg.date))} by ${(pkg.author && pkg.author.name) || pkg.publisher.username}`
// 					}
// 				},
// 				quicklookurl: pkg.links.repository && `${pkg.links.repository}#readme`
// 			};
// 		});
//
// 	alfy.output(items);
// });



// alfy.fetch('jsonplaceholder.typicode.com/posts').then(data => {
// 	const items = alfy
// 		.inputMatches(data, 'title')
// 		.map(x => ({
// 			title: x.title,
// 			arg: x.id
// 		}));
//
// 	// console.log('items')
// 	// console.log(items)
// 	alfy.output(items);
// });







// const hostname = '127.0.0.1';
// const port = 3001;
//
// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });
//
//
//
// const items = builtinModules.map(module => {
// 	const url = `https://nodejs.org/api/${module}.html`;
//
// return {
// 	title: module,
// 	autocomplete: module,
// 	arg: url,
// 	quicklookurl: url
// };
// });

// console.log('helzz')

// alfy.output('hellozz');
