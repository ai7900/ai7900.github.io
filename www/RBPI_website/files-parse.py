import os

arr = os.listdir(r"C:\Users\matst\Desktop\RBPI website\content")
path = r"C:\Users\matst\Desktop\RBPI website\content\filenames.txt"


f = open(path, "w")
for file in arr:
    if file.endswith('.jpg'):
        print(file)
        f.write("\"" + file + "\"" + ",\n")

f = open(path, "rt")
f.close()
