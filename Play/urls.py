from django.urls import path
from . import views
app_name = "Play"

urlpatterns = [
    path('', views.member,name="member"),
]
