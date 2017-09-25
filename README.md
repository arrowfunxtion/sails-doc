# sails-doc
Automatically generate beautiful documentation for your sails's Routes, Controllers & Models via JSDOC + docdash theme. 

## Usage 
    npm install sails-doc -g
    
Then on your sails root project directory, run `sails-doc`

This module generally using usejsdoc.org tags.

### Important!
To classify your files as controllers, models, services, etc. Use custom doc tag `@category`.
And also it is recommended to use @module instead of @name for each of your file name documentation. 

For example in your services/amazing-service.js

    /**
     * @module AmazingService 
     * @category services
     * @description This service will do amazing thing for your sails app
     */

With that doc tags will put this file into services categories in the navigation bar.

### Available categories
- models
- controllers
- services
- policies


## Preview
![Preview](/assets/sails-doc-preview.png?raw=true "Sails Doc Preview")

## Headsup!
This package is in very early stage. Things might not working, please add issues if you found one. 

## Contact
Email: mas.azamuddin@gmail.com