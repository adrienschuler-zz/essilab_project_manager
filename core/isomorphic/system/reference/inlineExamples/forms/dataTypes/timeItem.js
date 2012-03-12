isc.DynamicForm.create({
    ID: "timeForm",
    fields: [
        {name: "time", title: "Time", type: "time"}
    ]
});

isc.Button.create({
    top: 40,
    width: 125,
    title: "Show Time Value",
    click: function () {
        var item = timeForm.getItem("time");
        var inputTime = item.getValue();
	isc.say(isc.Time.toTime(inputTime));
    }
});

