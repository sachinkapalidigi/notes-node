# notes-node
npm init
//this will create a package.json file
npm install mod-name --save
//here save will write in package.json file

//instal package globally on the comp
npm instal nodemon -g
//nodemon creates live server
nodemon app.js
//to start seeing live changes in app.js
//process.args - takes in cli arguments with node app.js arg
//yargs to parse cli args


//Append File creates new file or appends to whatever is present
fs.appendFile('greetings.txt', 'Hello World');
//When this is not working use any other option below
//running a live server package
// option 1
 fs.appendFile('greetings.txt','Hello World!',function(err){
   if(err){
     console.log('unable to write to File');
   }

 });


  //option 2
fs.appendFileSync('greetings.txt','Hello '+user.username+'!');
//es6 template strings
fs.appendFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);
//after export from other file -  can use as method or property
console.log('result:',notes.add(9,-2));
//console.log(module);
module.exports.age = 25;

module.exports.addNote = ()=>{
  console.log('add Note');

  return 'new Note';
};

module.exports.add = (a,b)=>{
  return a+b;
}
//will search in default folder first then when it can't find ,it looks in node modules folder
const _=require('lodash');
// console.log(_.isString(true));
//
// console.log(_.isString('sachin'));

var filteredArray = _.uniq(['sachin',1,'sachin',2,3,1]);
console.log(filteredArray);


//console log argv : find that sirst element is _ which is an array where 0th element is the cmmnd that we give
var command = argv._[0];
