function ChannelSearch () {
    while (Found_Channel != Search_Channel) {
        Found_Channel = Search_Channel
        radio.sendValue("Send_Channel", Search_Channel)
        basic.pause(100)
    }
    basic.showNumber(Found_Channel)
}
radio.onReceivedValue(function (name, value) {
    if (name == "Send_Channel") {
        if (value == Found_Channel) {
            radio.sendValue("Channel_occupied", 1)
        }
    }
    if (name == "Channel_occupied") {
        if (value == 1) {
            Search_Channel += 1
            basic.showNumber(Search_Channel)
        }
    }
})
let Search_Channel = 0
let Found_Channel = 0
Found_Channel = 0
Search_Channel = 1
radio.setGroup(1)
ChannelSearch()
