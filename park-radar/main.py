from kafka import KafkaProducer
import configparser
import os
from producer.producer import create_producer, produce_messages


# Read properties from the file
root_path = os.path.abspath(os.path.join(os.getcwd(), '..', 'park-radar'))
properties_path = os.path.join(root_path, 'properties', 'app.properties')

config = configparser.ConfigParser()
config.read(properties_path)


# Access properties
application_id = config.get('kafka', 'application.id')
bootstrap_servers = config.get('kafka', 'bootstrap.servers')


producer = create_producer()

produce_messages(producer, config.get('kafka', 'parking-update-event-topic'), 10)
