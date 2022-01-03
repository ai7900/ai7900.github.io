import os

relative_path = "\content"
generate_file = r"\filenames.txt"

dir_path = os.path.dirname(os.path.realpath(__file__))
full_path = dir_path + relative_path;
print(full_path + "\n\n")
print(full_path + generate_file + "\n\n")

# an array of every filename in full_path
file_array = os.listdir(full_path)

f = open(full_path + generate_file, "w")
for file in file_array:
    if file.endswith(('.jpg', '.gif', '.png', '.jpeg')):
        print(file)
        f.write("\"" + file + "\"" + ",\n")

f = open(full_path + generate_file, "rt")
f.close()
