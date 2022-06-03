from django.db import models


class ZipCode(models.Model):
    zip_code = models.CharField(max_length=5)
    
    def __str__(self):
        return f"{self.zip_code}"
    