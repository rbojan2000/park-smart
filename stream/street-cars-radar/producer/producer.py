import random

def produce_message():
    number = random.randint(0, 8)
    letter = random.choice(['R', 'T', 'B', 'L'])
    message = f"{number:03d};{letter}->{letter}"
    return message
