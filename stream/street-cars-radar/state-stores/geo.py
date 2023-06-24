from collections import defaultdict
import json

# camera_adj, cong_mat
def default_value():
    return [0, 0, 0, 0]

camera_adj = defaultdict(default_value)

with open('/home/petarm/Documents/nsmart-hack/stream/street-cars-radar/state-stores/geo.json') as f:
    data = json.load(f)

for feature in data['features']:
    cid = feature['properties']['cid']
    dir = (feature['properties']['adj (L R T B)'].split())
    camera_adj[cid] = [x if x != 'n' else 0 for x in dir]
    
    