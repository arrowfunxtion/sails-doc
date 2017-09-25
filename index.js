#!/usr/bin/env node

var program = require('commander'),
    chalk = require('chalk');

    console.log(chalk.yellow('Making docs...'))

    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    
    async function ls() {
      var cwd = process.cwd();
      var mwd = __dirname;
      try{
        const { stdout, stderr } = await exec(mwd + '/node_modules/jsdoc/jsdoc.js '+cwd+'/api/** '+cwd+'/config/routes.js -c '+mwd+'/lib/jsdoc.json -t '+mwd+'/lib/docdash-category --destination '+cwd+'/assets/docs');
        var text = ('Successfully generated doc in assets/docs :)')
        console.log(chalk.green(text))
      } catch(e){
        console.log(chalk.red('Err: ' + e))
      }
      
     
    }
    ls();

