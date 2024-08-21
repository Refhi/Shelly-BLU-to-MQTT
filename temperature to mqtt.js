// This one is to periodicaly send the temperature to an MQTT broker.

let MQTTPublishTopic = "shellies/combles/temperature"
let tempId = 100

function sentTempToMqtt(tempId, topic) {
  let temp = Shelly.getComponentStatus("Temperature", tempId);
  let message  = temp.tC.toString()
  print(message)
  MQTT.publish(topic, message, 0, false);  
}


sentTempToMqtt(100, MQTTPublishTopic)

Timer.set(30000, true, function() {
  sentTempToMqtt(100, MQTTPublishTopic)
}, null);