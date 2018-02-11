# Open Source Agenda

[![Build Status](https://travis-ci.org/agendaopensource/agendaopensource.github.io.svg?branch=master)](https://travis-ci.org/agendaopensource/agendaopensource.github.io)

This is the repo of [https://agendaopensource.github.io](https://agendaopensource.github.io)

# Add a new event or meetup

- Edit the file [_data/events.json](https://github.com/agendaopensource/agendaopensource.github.io/blob/master/_data/events.json)
- Add a new object to the file keeping exactly the same structure:
```
{
    "@context": "http://schema.org",
    "@type": "Event",
    "location":{
        "@type": "Place",
        "name": "[LOCATION NAME]",
        "address": "[ADDRESS]",
        "district": "[DISTRICT]"
    },
    "name": "[NAME]",
    "startDate": "[START DATE]",
    "endDate": "[END DATE]",
    "description": "[DESCRIPTION]",
    "url": "[URL]"
}
```

# How to contribute

Feel free to contribute by suggesting [new events](https://github.com/agendaopensource/agendaopensource.github.io/issues/new?template=event.md&title=New%20event&labels=event) or by fixing any [open issues](https://github.com/agendaopensource/agendaopensource.github.io/issues/).  
Don't forget to follow our [code of condutct](https://github.com/agendaopensource/agendaopensource.github.io/blob/master/CODE_OF_CONDUCT.md)!

- Fork the project
- Create a descriptively named feature branch
- Add your feature
- Submit a pull request
  
If a PR contains a change to a JSON file (as e.g. in _data/ folder) please make sure that they are validated properly. 
There are online linters to help you, for instance:  
- https://jsonlint.com
- https://www.jsonschemavalidator.net


# Run this project locally

To make it easier to test, open console and run the following command:  
``docker run --rm --volume="$PWD:/srv/jekyll" -p4000:4000 -it jekyll/jekyll jekyll serve``  
Open browser in url: http://localhost:4000  
