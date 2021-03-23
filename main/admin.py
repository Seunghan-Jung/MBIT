from django.contrib import admin
from main.models import Question, Choice, Developer
# Register your models here.
admin.site.register([Question, Choice, Developer])