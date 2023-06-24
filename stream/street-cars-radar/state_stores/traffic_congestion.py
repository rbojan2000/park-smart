from .geo import cong_mat # L R T B

# L R T B
# koja kamera mi je levo od 5 => camera_adj[5]['L']... neki broj
# koja kamera mi je desno od 2 => camera_adj[2]['R']... 

# 005LT:
# 1. koja kamera mi je levo od 5 -> 4 :: con_mat[4][5] -= 1
# 2. koja kamera mi je desno od 5 -> 6 :: con_mat[5][6] += 1


def init_traffic_congestion_matrix():
    matrix = [[0] * 8 for _ in range(8)]
    return matrix


def calculate_traffix_congestion(current_node, previous_node, next_node, traffic_jam_mat):
    traffic_jam_mat[previous_node][current_node] = traffic_jam_mat[previous_node][current_node] - 1
    traffic_jam_mat[current_node][next_node] = traffic_jam_mat[previous_node][current_node] + 1    
