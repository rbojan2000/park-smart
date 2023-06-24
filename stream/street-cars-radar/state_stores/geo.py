from collections import defaultdict
import numpy as np
import json

# camera_adj, cong_mat
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