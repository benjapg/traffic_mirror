//rename this file to keys.js after you fill in the relevant information to enable functionality

var keys = {
    weather: {
		apiKey: 'fdd7e63da5bac9392c057a4fc7db4bd1',
		//Go to https://developer.forecast.io/ to register and get your free API key
		address: 'Rockwall, TX'
    },
	traffic: {
		params: {
			origin: 'ChIJUctVeX-qToYR_TRap--d99Q',
			destination: 'ChIJ7-fWuITnS4YRJG8fRn50h9Q',
            // Use the PlaceID Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
			departure_time: 'now',
			key: 'AIzaSyDHILVSmsM8NEqOdyd9I9XoppPp3jkf0Do'
            // Go here to get your Google Maps API key: https://developers.google.com/maps/documentation/directions/
		}
	},
	calendar: {
		maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
		urls: [
			{
				symbol: 'calendar-o',
				url: 'https://calendar.google.com/calendar/ical/benjamin.paul.bg%40gmail.com/private-7895394d4863c8bd3c2e60c5f6ccb03b/basic.ics'
				// For Google Calendar, it's the 'Private Address' under Calendar Settings when viewing your Calendar
			},
			{
				symbol: 'calendar-check-o',
				url: 'CALENDAR.ics ADDRESS'
			}
		]
	},
	birthdays: [
		{
			day:14,
			month:3,
			name:'Holly'
		},{
			day:15,
			month:1,
			name:'Ben'
		}
	]
}
