# from django.shortcuts import render
# from .models import ZipCode

# # Create your views here.


# def zip_codes(request):
#     all_zip_codes = ZipCode.objects.all()
#     return render(request, 'zip_codes.html', {'all_zip_codes': all_zip_codes})
    




from django.shortcuts import render
from rest_framework import viewsets
from thermostat_app.serializers import *
from thermostat_app.models import *


class ZipCodeViewSet(viewsets.ModelViewSet):
    queryset = ZipCode.objects.all()
    serializer_class = ZipCodeSerializer