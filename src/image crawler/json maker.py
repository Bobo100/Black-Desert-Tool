import os
import json

base_path = os.path.dirname(os.path.abspath(__file__))
# 資料夾路徑
folder_path = os.path.join(base_path, 'image' , '原料')

folder_path2 = os.path.join(base_path, 'image' , '料理')

# 創建一個空的字典
data_dict = {}

# 遍歷資料夾中的所有檔案
for file_name in os.listdir(folder_path):
    # 構建檔案完整路徑
    file_path = os.path.join(folder_path, file_name)
    print(file_path)
    witout_ext = os.path.splitext(file_name)[0]
    # 將檔案名稱作為 key，檔案路徑作為 value 加入字典
    data_dict[witout_ext] = './image/原料/' + file_name

for file_name in os.listdir(folder_path2):
    # 構建檔案完整路徑
    file_path = os.path.join(folder_path2, file_name)
    print(file_path)
    witout_ext = os.path.splitext(file_name)[0]
    # 將檔案名稱作為 key，檔案路徑作為 value 加入字典
    data_dict[witout_ext] = './image/料理/' + file_name


# 將字典轉成 JSON 格式
json_data = json.dumps(data_dict, ensure_ascii=False)

# 將 JSON 寫入檔案
with open('image_path.json', 'w', encoding='utf-8') as f:
    f.write(json_data)
