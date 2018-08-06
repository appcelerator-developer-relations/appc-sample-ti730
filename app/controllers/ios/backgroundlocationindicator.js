/**
 * Docs: https://docs.appcelerator.com/platform/latest/#!/api/Titanium.Geolocation-property-showBackgroundLocationIndicator
 */

var locationIndicator = false;
function toggleIndicator() {

	// Inverse current status
	locationIndicator = !locationIndicator;

	// Before we can change the indicator, we need to stop monitoring first.
	stopLocationMonitor();
	Ti.Geolocation.showBackgroundLocationIndicator = locationIndicator;
	startLocationMonitor();
	$.statusIndicator.text = locationIndicator ? 'visible' : 'indicator visible';

}

function hasPermission() {
	// check for the right permission status
	if (Ti.Geolocation.hasLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS)) {
		$.permission.hide();
		$.control.show();
		startLocationMonitor();
	} else if (Ti.App.Properties.getBool('askedLocationPermission', false)) {
		alert('Gave wrong or no permission. Please give the always permission in the settings to demonstrate this feature');
		// can't ask again on iOS, so don't show button
		$.requestPermission.hide();
	}
}
// run on start in case user enters page a second time
hasPermission();

function requestPermission() {
	Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS, function (e) {
		Ti.App.Properties.setBool('askedLocationPermission', true);
		hasPermission();
	});
}

function locationCallback(e) {
	// got location here. We're not using the callback as we don't need it
}

function stopLocationMonitor() {
	Ti.Geolocation.removeEventListener('location', locationCallback);
}

function startLocationMonitor() {
	Ti.Geolocation.addEventListener('location', locationCallback);
}
