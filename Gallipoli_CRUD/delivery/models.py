from django.db import models

# Create your models here.
class Helado (models.Model):
    sabor = models.CharField(max_length=50)
    descripcion = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.sabor