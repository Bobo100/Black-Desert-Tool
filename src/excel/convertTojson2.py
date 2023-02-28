import pandas as pd
import json

# 讀取Excel檔案
name = "（一）綠藍金武器及摩諾斯工具"
df = pd.read_excel(name + '.xlsx', header=0)

# 取出表頭
header = list(df.columns)

# 刪除表頭列
df = df.iloc[1:]

# 將空白值轉換為null
df = df.fillna(value='')

# 轉換為 dict
data_dict = df.to_dict(orient='records')

# 將表頭加入 dict 中
for i in range(len(data_dict)):
    data_dict[i]['header'] = header

# 將資料框轉換成JSON格式
# json_data = df.to_json(orient='records', force_ascii=False)

json_str = json.dumps(data_dict, ensure_ascii=False)


# 儲存JSON檔案
with open(name + '.json', 'w', encoding='utf-8') as f:
    f.write(json_str)
