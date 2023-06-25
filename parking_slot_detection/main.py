import cv2
import numpy as np

def draw_polygon(event, x, y, flags, param):
    global polygons, img, current_polygon, corner_counter

    if event == cv2.EVENT_LBUTTONDOWN:
        if corner_counter == 0:
            # Start a new polygon
            current_polygon = [(x, y)]
            corner_counter += 1
        else:
            # Continue drawing the polygon
            current_polygon.append((x, y))
            corner_counter += 1

        if corner_counter == 4:
            # Polygon completed, reset corner counter and add polygon to the list
            polygons.append(current_polygon)
            cv2.polylines(img, np.array([current_polygon]), True, (0, 255, 0), 2)
            current_polygon = []
            corner_counter = 0

def save_polygon_locations(polygons, filename):
    print(polygons)
    with open(filename, 'w') as file:
        for poly in polygons:
            corners = ','.join([f'{corner[0]},{corner[1]}' for corner in poly])
            file.write(corners + '\n')

# Load image
img = cv2.imread('output_image.jpg')
img = cv2.resize(img, (1020, 500))

# Create a window and bind the mouse callback function
cv2.namedWindow('Image')
cv2.setMouseCallback('Image', draw_polygon)

# Initialize the list of polygons
polygons = []
current_polygon = []
corner_counter = 0

while True:
    cv2.imshow('Image', img)
    key = cv2.waitKey(1) & 0xFF

    # Press 'r' to reset the polygons
    if key == ord('r'):
        polygons = []
        img = cv2.imread('output_image.jpg')

    # Press 's' to save the polygon locations and exit
    elif key == ord('s'):
        save_polygon_locations(polygons, 'rectangle_locations.txt')
        break

    # Press 'q' to exit without saving
    elif key == ord('q'):
        break

cv2.destroyAllWindows()