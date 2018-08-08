# Sample App for Titianum SDK 7.3.0

This sample is for showing the newest features introduced in Axway Titanium SDK 7.3.0. Of course this is not everything introduced in 7.3.0. Check out the full list of features, bugfixes and improvements in the [releasenotes](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_7.3.0.RC_Release_Note). 

## iOS
On iOS there are multiple new features that are great. 

- **Parallax effect**, or *UIInterpolatingMotionEffect*, has been added. This is a `tss` property you can use, no controller changes required. You can see how it works in [`parallax.tss`](https://github.com/appcelerator-developer-relations/appc-sample-ti730/blob/master/app/styles/ios/parallax.tss#L8).
- **showsBackgroundLocationIndicator** has been added. This property on the `Ti.Geolocation` namespace allows you to show the "blue" bar "App is using your location" when your app has been given the "Always" permission. How it works can be seen in the [`backgroundlocationindicator.js`](https://github.com/appcelerator-developer-relations/appc-sample-ti730/blob/master/app/controllers/ios/backgroundlocationindicator.js) controller.
- **iPhone X home indicator** allows you to control wether or not you can see the home indicator on iPhone X. This is great if you have pages in your app. See how it is implemented in the [`iphonexhomeindicator.js`](https://github.com/appcelerator-developer-relations/appc-sample-ti730/blob/master/app/controllers/ios/iphonexhomeindicator.js) controller.


### UserNotifications Framework
Support for UserNotifications framework has also been added in 7.3.0. But this is so awesome we decided it needed its own sample app. Check it out: <https://github.com/appcelerator-developer-relations/appc-sample-ios-push-notifications>

### More iOS changes

Besides the features above a lot of bugs were fixed too. Obiously, demonstrating this is kind of pointless, so here's the link to the issue list fixed. [Release notes](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_7.3.0.RC_Release_Note-section-src-56300461_TitaniumSDK7.3.0.RCReleaseNote-iOSplatform.1)

There were also a bunch of improvements made which you can see a little bit further down on the releasenotes.

## Android
There is only one Android specific feature displayed in this sample app, which is the Ti.UI.MaskedImage. This functionality was previously iOS only, but now works on Android too. Only a couple samples were added to this app but it should give you an idea what is possible. You can see how it works in [`maskedImage.tss`](https://github.com/appcelerator-developer-relations/appc-sample-ti730/blob/master/app/styles/android/maskedImage.tss). 

To experience and test with all MaskedImage properties, head over the the [Jira Ticket](https://jira.appcelerator.org/browse/TIMOB-17363) and download the sample app from there.

### More Android changes

Besides the features above a lot of bugs were fixed too. Obiously, demonstrating this is kind of pointless, so here's the link to the issue list fixed. [Release notes](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_7.3.0.RC_Release_Note-section-src-56300461_TitaniumSDK7.3.0.RCReleaseNote-Androidplatform.1)

There were also a bunch of improvements made which you can see a little bit further down on the releasenotes.

## Cross platform
Next to iOS and Android specific features there is also a new feature for both iOS and Android. This is the  `zoomLevel` property for `Ti.UI.WebView`.  For this sample I've just added a `timeout` after opening the controller with the webview to demonstrate how it works. 

Basically nothing more than `$.zoomable.zoomLevel = 2;` (or any other number you want obviously)

## Linting

This project uses the [`axway/env-alloy`](https://github.com/appcelerator/eslint-config-axway#alloy-apps) NPM plugin
to lint the source. You can lint the source yourself using `npm run lint`.

## Support

Make sure to reach out to the [Titanium Slack community](http://tislack.org) for questions or file a [JIRA ticket](https://jira.appcelerator.org)
if you run into any issues.

## Author

Rene Pot, Axway Appcelerator

## License

Apache 2
