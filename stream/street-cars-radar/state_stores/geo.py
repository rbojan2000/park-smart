from collections import defaultdict
import numpy as np
import json
import math

def haversine_distance(lat1, lon1, lat2, lon2):
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)
    
    dlon = lon2_rad - lon1_rad
    dlat = lat2_rad - lat1_rad
    a = math.sin(dlat/2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    
    radius = 6371
    
    distance = radius * c
    
    return distance


def default_value():
    return [0, 0, 0, 0]

camera_adj = defaultdict(default_value)

with open('/home/petarm/Documents/nsmart-hack/stream/street-cars-radar/state_stores/geo_data.json') as f:
    data = json.load(f)

for feature in data['features']:
    cid = feature['properties']['cid']
    dir = (feature['properties']['adj (L R T B)'].split())
    camera_adj[cid] = [int(x) if x != 'n' else 0 for x in dir]

cong_mat = np.zeros((len(camera_adj.keys()),len(camera_adj.keys())))


# message format: 002;R->T
def get_previous_and_next_node(semaphore_id, from_direction, next_direction) :
    adjacency_list = camera_adj[semaphore_id]

    directions = {'L': 0, 'R': 1, 'T': 2, 'B': 3}

    previous_semaphore_id = adjacency_list[directions[from_direction]]
    next_semaphore_id = adjacency_list[directions[next_direction]]

    return previous_semaphore_id, next_semaphore_id

def calculate_traffix_congestion(current_node, previous_node, next_node):
 if cong_mat[previous_node][current_node] > 0:
        cong_mat[previous_node][current_node] -= 1

 cong_mat[current_node][next_node] += 1
