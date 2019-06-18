from django.urls import path
from . import views

urlpatterns = [
    path('create', DeckCreateView.as_view())), 
]
