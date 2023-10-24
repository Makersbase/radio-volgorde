function ChannelSearch () {
    while (Found_Channel != Search_Channel) {
        radio.setGroup(Search_Channel)
        radio.sendValue("SChannel", Search_Channel)
        basic.pause(50)
        if (EchoTerug == 1) {
            EchoTerug = 0
        } else {
            Found_Channel = Search_Channel
        }
    }
    basic.showNumber(Search_Channel)
}
radio.onReceivedValue(function (name, value) {
    if (name == "SChannel") {
        radio.sendValue("OChannel", 1)
    }
    if (name == "OChannel") {
        Search_Channel += 1
        EchoTerug += 1
    }
})
let EchoTerug = 0
let Search_Channel = 0
let Found_Channel = 0
Found_Channel = 0
Search_Channel = 1
EchoTerug = 0
ChannelSearch()
