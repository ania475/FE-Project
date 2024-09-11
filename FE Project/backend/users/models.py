from django.db import models

# Create your models here.

class User(models.Model):
    user_id = models.IntegerField(max_length=10)
    username=models.CharField(max_length=12)
    password=models.CharField(max_length=12)
    def __str__(self):
        return (self.username + " " + self.password)