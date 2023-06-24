import configparser

application_id = config.get('Kafka', 'application.id')
bootstrap_server = config.get('Kafka', 'bootstrap.server')

print(application_id)  # Output: my-application
print(bootstrap_server)  # Output: localhost:9092
