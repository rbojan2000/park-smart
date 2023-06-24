import random

# message format: 002;R->T

def produce_message():
    number = random.randint(1, 8)
    from_letter = random.choice(['R', 'T', 'B', 'L'])
    to_letter = random.choice(['R', 'T', 'B', 'L'])
    
    while from_letter == to_letter:
        to_letter = random.choice(['R', 'T', 'B', 'L'])
    
    message = f"{number:03d};{from_letter}->{to_letter}"
    return message