import pandas as pd
import json
import os

# 讀取路徑下的所有檔案
base_path = os.path.dirname(os.path.abspath(__file__))

for file in os.listdir(base_path):
    if file.endswith('.xlsx'):
        without_extension = os.path.splitext(file)[0]
        # 讀取Excel檔案
        df = pd.read_excel(file)

        # 將空白值轉換為null
        df = df.fillna(value='')

        # 將資料框轉換成JSON格式
        json_data = df.to_json(orient='records', force_ascii=False)

        # 儲存JSON檔案
        with open(without_extension+ '.json', 'w', encoding='utf-8') as f:
            f.write(json_data)


# # 讀取Excel檔案
# name = "（二）綠藍金防具"
# df = pd.read_excel(name + '.xlsx')



# # 將空白值轉換為null
# df = df.fillna(value='')

# # 將資料框轉換成JSON格式
# json_data = df.to_json(orient='records', force_ascii=False)

# # 儲存JSON檔案
# with open(name+ '.json', 'w', encoding='utf-8') as f:
#     f.write(json_data)
