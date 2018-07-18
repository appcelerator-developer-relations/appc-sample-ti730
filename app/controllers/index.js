function handleItemClick(e) {
  var data = e.section.items[e.itemIndex].properties;
  $.navWin.openWindow(Alloy.createController(data.controller).getView(), data);
}

$.getView().open();
