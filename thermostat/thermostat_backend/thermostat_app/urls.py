# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.zip_codes, name='zip_codes')
# ]



from django.urls import path, include
from thermostat_app.views import * # This library gives us all of the functions usually found in views.py
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('zip_code', ZipCodeViewSet, basename='zip_code')

urlpatterns = router.urls