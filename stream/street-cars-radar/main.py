from producer.producer import produce_message
from state_stores.traffic_congestion import init_traffic_congestion_matrix
from state_stores.traffic_congestion import calculate_traffix_congestion
from state_stores.geo import camera_adj, cong_mat, get_previous_and_next_node
from utils.traffic_message_parser import parse_trafic_input_stream 

# L R T B

# while(True):
message = produce_message()        
print(message)
from_direction, next_direction, semaphore_id = parse_trafic_input_stream(message)    

previous_node, next_node = get_previous_and_next_node(semaphore_id, from_direction, next_direction)

# calculate_traffix_congestion(semaphore_id, previous_node, next_node, cong_mat)

# print(cong_mat)
