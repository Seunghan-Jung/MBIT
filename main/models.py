from django.db import models

# 문항
class Question(models.Model):
    number = models.IntegerField(unique=True)
    content = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.pk}번 {self.content}'
    
# 선택지
class Choice(models.Model):
    content = models.CharField(max_length=100)
    
    developer = models.ForeignKey(to='main.Developer', on_delete=models.CASCADE, null=True)
    question = models.ForeignKey(to='main.Question', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.content
    

# 개발자 유형
class Developer(models.Model):
    name = models.CharField(max_length=50)
    count = models.IntegerField(default=0)
    data = models.JSONField()
    
    def __str__(self):
        return self.name