/**
 * Docs: https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.Window-property-homeIndicatorAutoHidden
 */

var homeindicatorHidden = false;
function toggleIndicator(){
  
  // Inverse current status and set it to the current window 
  homeindicatorHidden = !homeindicatorHidden;
  $.getView().homeIndicatorAutoHidden = homeindicatorHidden;
  
  $.statusIndicator.text = homeindicatorHidden ? 'hidden' : 'visible';
  
}
