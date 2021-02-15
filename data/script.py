import json
from pathlib import Path

from main.models import Developer


BASE_DIR = Path(__file__).resolve().parent

file_names = ['1_backend.json', '2_frontend.json', '3_data_ai.json', '4_secure.json', '5_game.json']

for id, file_name in enumerate(file_names, 1):
    file = open((BASE_DIR /file_name), encoding='utf8')
    data = json.load(file)
    developer = Developer.objects.get(id=id)
    developer.data = data
    developer.save()
    