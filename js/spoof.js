var botui = new BotUI('my-botui-app');

botui.message.add({
  content: 'Hello World from bot!<br/>line break.<a href="https://moin.im">link</a>'
});

botui.message.add({
  human: true,
  content: 'Hello World from human!'
});


/*botui.message.add({
	content: 'Hello! Do you need help with to start spoofing?'
}).then(function () {
	botui.action.button({
		text: 'Yes',
		value: 'yes'
	})
})
botui.message.add({
	type: 'html',
	content: 'I will be assisting you on how to find out how to spoof. <br>Whats your Android Version?<br><br>If you dont know your android version check this guide <a href="https://www.wikihow.com/Check-What-Kind-of-Android-Phone-You-Have" target="_blank">here</a>'
}).then(function () { // wait till its shown
	botui.action.button({ // show next message
		action: [{
			text: '4',
			value: 'four'
		}, {
			text: '5',
			value: 'five'
		}, {
			text: '6',
			value: 'six'
		}, {
			text: '7',
			value: 'seven'
		}, {
			text: '8',
			value: 'eight'
		}, {
			text: '9',
			value: 'nine'
		}, {
			text: '10',
			value: 'ten'
		}, ]
	}).then(function (res) { // will be called when a button is clicked.
		console.log(res.value); // will print "one" from 'value'
	})
});*/