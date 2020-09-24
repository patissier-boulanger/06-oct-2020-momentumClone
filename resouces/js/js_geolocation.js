var getLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(coord){
		console.log(coord);
		_global.coord = coord.coords;
		$(".geoLocation").html(`${_global.coord.latitude}, ${_global.coord.longitude}`);
	});
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}