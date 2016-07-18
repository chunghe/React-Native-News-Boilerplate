# React-Native-News-Boilerplate

A React-Native boilerplate integrate with latest React-native and Redux:

1. working with latest React-Native NavigationExperimental API (version 0.29 At the time of writing)
1. HMR for reducers
1. integrate ESLint. ESLint ruels follows [fbsamples/f8app](https://github.com/fbsamples/f8app/blob/master/.eslintrc)
1. integrate ESLint with [lint-staged](https://github.com/okonet/lint-staged) and [pre-commit](https://github.com/jish/pre-commit)
1. use [Redux Ducks](https://github.com/erikras/ducks-modular-redux) for easier maintaining action creators/reducers/constants.
1. integrate [redux-api-middleware](https://github.com/agraboso/redux-api-middleware)
1. integrate [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools)

based on [RN-NavigationExperimental-Redux-Example](https://github.com/jlyman/RN-NavigationExperimental-Redux-Example) 

## getting started

make sure you go through all the steps in [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) guide

```
$ npm install
```

for iOS 
```
$ react-native run-ios 
```

for Android
```
$ react-native run-android
$ adb reverse tcp:5678 tcp:5678  # to enable redux developer tool
```
## screenshots

![ios screenshot](demo/ios.gif?raw=true "Screencast of ios functionality")
![android screenshot](demo/android.gif?raw=true "Screencast of android functionality")
