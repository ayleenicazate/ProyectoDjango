from django.urls import path
from . import views

urlpatterns = [
    path('shop/', views.shop, name="shop"),
    path('membresia/', views.membresia, name="membresia"),
    path('patrocinio/', views.patrocinio, name="patrocinio"),
]
