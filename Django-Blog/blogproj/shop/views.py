from django.shortcuts import render

def shop(request):
    return render(request, 'shop.html')

def membresia(request):
    return render(request, 'membresia.html')

def patrocinio(request):
    return render(request, 'patrocinio.html')