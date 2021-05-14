/// <reference path="path/to/node.d.ts" />

class MyClass {

    // Here we import the File System module of node
    //private fs = require('fs');

    fs = require('fs');
	readline = require('readline');
	dat='';
	
	constructor() { }
	
    createFile() {

        this.fs.writeFile('file.txt', 'I am cool!',  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }

    showFile() {

        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    }
	
	
	async processLineByLine() {
		var rl = this.readline.createInterface({
			  input : this.fs.createReadStream('file.txt'),
			  output: process.stdout,
			  terminal: false
		})
		
		rl.on('line',function(line){
			 //console.log(line) //or parse line
			 console.log(this.dat);
		})
		
		
	}
}

console.log("inicio");
as=new MyClass();
as.processLineByLine();

https://stackoverflow.com/questions/11692835/overwrite-a-line-in-a-file-using-node-js