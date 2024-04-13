let CONFIG = {
    switchId: 0,
    MQTTPublishTopic: "shellies/combles/status/switch:0",
};

function MQTTAnnounceSwitch(status) {
    let announceObj = {
        id: CONFIG.switchId,
        source: "switch",
        output: status
    };
    print("Publishing to MQTT topic:", CONFIG.MQTTPublishTopic);
    print("Message:", JSON.stringify(announceObj));
    MQTT.publish(CONFIG.MQTTPublishTopic, JSON.stringify(announceObj), 0, false);
}

// Définir un timer pour récupérer le statut de l'interrupteur toutes les 30 secondes
Timer.set(30000, true, function() {
    let switchStatus = Shelly.getComponentStatus("switch", CONFIG.switchId);
    if (switchStatus) {
        print("Switch status:", switchStatus.output);
        MQTTAnnounceSwitch(switchStatus.output);
    } else {
        print("Unable to get switch status");
    }
}, null);