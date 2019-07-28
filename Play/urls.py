from django.urls import path
from . import views
app_name = "Deck"

urlpatterns = [
    path('', views.member,name="list"),
]
