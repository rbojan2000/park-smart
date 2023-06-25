import cv2
import pandas as pd
import numpy as np
from ultralytics import YOLO
import time

model = YOLO('yolov8s.pt')

cv2.namedWindow('RGB')
#cv2.setMouseCallback('RGB', RGB)

my_file = open("coco.txt", "r")
data = my_file.read()
class_list = data.split("\n")
cap=cv2.VideoCapture('parking1.mp4')

# Read areas from CSV file
areas = []
def read_rectangle_locations(filename):
    rectangles = []
    with open(filename, 'r') as file:
        lines = file.readlines()
        for line in lines:
            corners = line.strip().split(',')
            corners = [(int(corners[i]), int(corners[i+1])) for i in range(0, len(corners), 2)]
            rectangles.append(corners)
    return rectangles

# Usage
areas = read_rectangle_locations('rectangle_locations.txt')
print(areas)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    #time.sleep(1)
    frame = cv2.resize(frame, (1020, 500))

    results = model.predict(frame)
    a = results[0].boxes.data
    px = pd.DataFrame(a).astype("float")

    count_per_area = []
    for area in areas:
        count_per_area.append([])

    for index, row in px.iterrows():
        x1 = int(row[0])
        y1 = int(row[1])
        x2 = int(row[2])
        y2 = int(row[3])
        d = int(row[5])
        c = class_list[d]
        if 'car' in c:
            cx = int(x1 + x2) // 2
            cy = int(y1 + y2) // 2
            for i, area in enumerate(areas):
                results_area = cv2.pointPolygonTest(np.array(area, np.int32), ((cx,cy)), False)
                if results_area >= 0:
                    count_per_area[i].append(c)

    counts = [len(count) for count in count_per_area]
    total_count = sum(counts)
    empty_spaces = len(areas) - total_count

    for i, count in enumerate(counts):
        area = areas[i]
        if count == 1:
            cv2.polylines(frame, [np.array(area, np.int32)], True, (0, 0, 255), 2)
            cv2.putText(frame, str(i + 1), (area[0][0], area[0][1]), cv2.FONT_HERSHEY_COMPLEX, 0.5, (0, 0, 255), 1)
        else:
            cv2.polylines(frame, [np.array(area, np.int32)], True, (0, 255, 0), 2)
            cv2.putText(frame, str(i + 1), (area[0][0], area[0][1]), cv2.FONT_HERSHEY_COMPLEX, 0.5, (255, 255, 255), 1)

    print("Empty spaces:", empty_spaces)
    frame = cv2.putText(frame, "CID: 1", (0, 30), cv2.FONT_HERSHEY_COMPLEX, 1,
                        (255, 255, 255), 2, cv2.LINE_AA, False)
    frame = cv2.putText(frame, "Number of free slots: " + str(empty_spaces), (0, 60), cv2.FONT_HERSHEY_COMPLEX, 1,
                        (255, 255, 255), 2, cv2.LINE_AA, False)
    cv2.imshow('RGB', frame)
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()