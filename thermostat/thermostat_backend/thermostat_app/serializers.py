from rest_framework import serializers
from thermostat_app.models import *

class ZipCodeSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ZipCode
        fields = ['id', 'zip_code']
        depth = 1