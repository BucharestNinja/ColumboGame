from django.urls import path
from .views import DeckListView, DeckCreateView, DeckDeleteView, DeckUpdateView, DeckDeleteView, DeckDetailView

app_name = "Deck"
urlpatterns = [
    path('', DeckListView.as_view(),name="list"),
    path('create/', DeckCreateView.as_view(),name="create"),
    path('<int:pk>/update/', DeckUpdateView.as_view(),name="update"),
    path('<int:pk>/delete/', DeckDeleteView.as_view(),name="delete"),
]
