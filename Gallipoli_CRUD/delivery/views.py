from django.shortcuts import render
from .models import Helado



# Create your views here.

def home(request):
    helados = Helado.objects.all()
    return render (request, 'delivery/base.html', {'helados':helados})
