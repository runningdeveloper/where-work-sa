# Contribution Guidelines

Yay thanks for contributing!

## Do you have a work place to add or want to improve the website?

The easiest option is to add a place to the repository. Follow the steps below to make a pull request.

## Submitting a pull request to add a work place

1. [Fork](https://github.com/runningdeveloper/where-work-sa/fork) and clone the repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Create a new `place-name.json` document in `src/data/locations`. These documents should be relatively unique as it corresponds to the slug in the url of the page. So try make it unique by adding a place and the area or shopping center in the name. Like `mc-donalds-cresta.json`
4. Copy the contents of another location like `tshimologong.json` and replace the contents of each property. Feel free to leave blanks. I haven't full tested what happens for bad data.
5. You can run the project if you would like to see your change `gatsby develop` (see readme for setup details)
6. Commit your change

```
  git add *
  git commit -m "Commit message"
```

7. Push to your fork and [submit a pull request](https://github.com/runningdeveloper/where-work-sa/compare)
8. Pat your self on the back and wait for your pull request to be reviewed and merged.

## Submitting a pull request to improve the website

1. Check to see if the problem exists in the [Issues](https://github.com/runningdeveloper/where-work-sa/issues) and [Pull Requests](https://github.com/runningdeveloper/where-work-sa/pulls) so you don't do double work.
2. [Fork](https://github.com/runningdeveloper/where-work-sa/fork) and clone the repository.
3. Commit your change

```
  git add *
  git commit -m "Commit message"
```

4. Push to your fork and [submit a pull request](https://github.com/runningdeveloper/where-work-sa/compare)
5. Pat your self on the back and wait for your pull request to be reviewed and merged.

## Format of the location file

Have a look at the comments I've added below

```
{
  "name": "Name of the place try keep it unique-ish for the search",
  "website": "Leave blank if no website",
  "tel": "Leave blank if no tel",
  "email": "Leave blank if no email",
  "lat": -26.194622,
  "long": 28.031863,
  "description": "Add a short description to help someone get an idea of the place",
  "wifi": {
    "quality": "sinlge word like slow, average, fast",
    "ssid": "Tshimologong General",
    "password": "letsinovate",
    "unlimited": true, // some places limit you on time or data which is nice to know
    "notes": "add some notes about do you have to sign in with an email or ask the waiter for the code"
  },
  "times": "A general sentance like Monday to Friday 8am-10pm",
  "cost": "Some places need you to pay or order food, let people know",
  "notes": "Help people understand more about the place. Is there parking, is their a weird entrance, how the chairs, are there plugs ...",
  "city": "Johannesburg",
  "githubusers": ["runningdeveloper"], // Added an array here so you can add multiple people, maybe you fix a spelling mistake
  "updated": "24/10/2019" // please add the date you updated
}


```

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
