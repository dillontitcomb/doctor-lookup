# _Dillon's Doctor Lookup Program_

#### Javascript & API Exercise for Epicodus, 3.23.2018

#### By _**Dillon Titcomb**_

## Description

_This webpage takes either an illness or a name from a user and returns either doctors in their area that can treat the illness or any doctors that match the provided name. For the name search, the program also returns information like phone number, address, and whether the doctor is accepting patients._

## Specifications

* _Program returns doctors in an area that specialize in an illness/procedure_
	* _Example input: 'back pain'_
	* _Example output: 'John Doe, West Seattle; Jane Doe, Capitol Hill'_

* _Program returns doctor information for any doctor whose name matches the input_
	* _Example input: 'Bob'_
	* _Example output: 'Bob Small, Pediatrician, Pioneer Square; Bobby Brown, Brain Surgeon, Laurelhurst'_

* _Program returns an error message if the query fails_
	* _Example input: 'Bob'_
	* _Example output: 'Error 401: request unauthorized'_

* _If name query doesn't match any doctors, program returns a message saying there were no matches_
	* _Example input: 'Bob'_
	* _Example output: 'Sorry - there are no doctors in your area matching that keyword'_

## Setup/Installation Requirements

* _Clone this repository_

* _Go to the Better Doctor API, create an account, and access your api key_
* _Create an .env file and put your key there as exports.apiKey="your key here"_
* _Add the .env file to your .gitignore file_
* _On a Mac, run the following commands in terminal:_
* _npm install dotenv-webpack --save-dev and add the plugin to your webpack.config.js file_
* _npm install_
* _npm run start_
* _Input an illness or a doctor name to see options in your local area._

## Known Bugs

_No known bugs._

## Support and contact details

_Please contact me at dillontitcomb@gmail.com with inquiries._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_
* _Node / NPM_
* _Webpack_
* _Better Doctor API_

## Link to page

https://github.com/dillontitcomb/doctor-lookup

### License

*The software is licensed under the MIT license.*

Copyright (c) 2018 **_Dillon Titcomb_**
