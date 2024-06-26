from django.db import models

# Create your models here.
class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length = 64)
    precio = models.IntegerField()

    def __str__(self):
        return f'{self.nombre} -> {self.precio}'