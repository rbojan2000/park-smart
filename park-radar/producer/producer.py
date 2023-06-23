from kafka import KafkaProducer
import configparser
import os


def create_producer():
    # Read properties from the file
    root_path = os.path.abspath(os.path.join(os.getcwd(), '..', 'park-radar'))
    properties_path = os.path.join(root_path, 'properties', 'app.properties')

    config = configparser.ConfigParser()
    config.read(properties_path)

    # Access properties
    bootstrap_servers = config.get('kafka', 'bootstrap.servers')

    producer = KafkaProducer(bootstrap_servers=bootstrap_servers)
    return producer


def produce_messages(producer, topic, num_messages):
    for i in range(num_messages):
        message = f"Message {i}"
        producer.send(topic, value=message.encode('utf-8'))
        print(f"Produced: {message}")

    # Flush and close the producer
    producer.flush()
    producer.close()
