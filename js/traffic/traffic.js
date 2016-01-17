var traffic = {
	trafficLocation: '.traffic',
	params: keys.traffic.params || null,
	apiBase: 'https://maps.googleapis.com/maps/api/directions/',
	apiType: 'json',
	updateInterval: 300000,
	fadeInterval: 1000,
	intervalId: null
}

/**
 * Retrieves the current travel time from Google Maps Directions API
 */
traffic.updateCurrentTraffic = function () {

	var hour = moment().hour();
	var dayOfWeek = moment().day();
	
	//Only displays traffic in the mornings of weekdays
	if(hour >= 0 && hour <= 23 && dayOfWeek >= 0 && dayOfWeek <= 6){	

	$.ajax({
			type: 'GET',
			url: traffic.apiBase + traffic.apiType,
			dataType: 'json',
			data: traffic.params,
			success: function (data) {
	
				var _duration = data.routes[0].legs[0].duration.value,
					_durationInTraffic = data.routes[0].legs[0].duration_in_traffic.value,
					_durationInTrafficMinutes = data.routes[0].legs[0].duration_in_traffic.text,
					_trafficTime = _durationInTraffic - _duration,
					_trafficPhrase = 'No traffic on the way to work';
	
				//Convert _trafficTime from seconds to minutes
				_trafficTime = _trafficTime / 60;
	
				//Verbal traffic conditions
				if(_trafficTime <= 2){
					_trafficPhrase = 'No traffic on the way to work';
				} else if (_trafficTime > 2 && _trafficTime <= 5){
					_trafficPhrase = 'Light traffic on the way to work';
				} else if (_trafficTime > 5 && _trafficTime <= 10){
					_trafficPhrase = 'Moderate traffic on the way to work';
				} else if (_trafficTime > 10 && _trafficTime <= 15){
					_trafficPhrase = 'Heavy minute delay going to work';
				} else {
					_trafficPhrase = 'Severe traffic going to work';
				}
				
				$(this.trafficLocation).updateWithText(_trafficPhrase + '<br> Expected commute is ' + _durationInTrafficMinutes + '<br>', this.fadeInterval);				

			}.bind(this),
			error: function () {
			}
		});
	
	} else{
		$(this.trafficLocation).updateWithText('', this.fadeInterval);
	}
}

traffic.init = function () {

	this.updateCurrentTraffic();

	this.intervalId = setInterval(function () {
		this.updateCurrentTraffic();
	}.bind(this), this.updateInterval);

}