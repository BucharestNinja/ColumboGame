from rest_framework import routers
from .views import  DeckViewSet
app_name = "Play"

router = routers.DefaultRouter()
router.register(r'Deck', DeckViewSet)
