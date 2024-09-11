from django.db import models

# Create your models here.

class Fact(models.Model):
    user_id = models.IntegerField(max_length=10)
    fact_id=models.IntegerField()
    fact = models.CharField(max_length=400)
    def __str__(self): #line to better visualise values in the interactive Shell prompt
        return self.fact
