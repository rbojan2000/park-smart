from producer.producer import produce_message
from state_stores.geo import get_previous_and_next_node, calculate_traffix_congestion
from utils.traffic_message_parser import parse_trafic_input_stream

# L R

while True:
    message = produce_message()
    from_direction_node, next_direction_node, semaphore_id = parse_trafic_input_stream(message)

    previous_node, next_node = get_previous_and_next_node(semaphore_id, from_direction_node, next_direction_node)

    calculate_traffix_congestion(semaphore_id, previous_node, next_node)
