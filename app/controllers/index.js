function handleItemClick(e) {
  var data = e.section.items[e.itemIndex].properties;
  if (!data.controller) return;
  
  $.navWin.openWindow(Alloy.createController(data.controller).getView(), data);
}

$.getView().open();