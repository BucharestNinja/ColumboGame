from rest_framework import routers
from .views import GameInfoViewSet, DeckViewSet
app_name = "Play"

router = routers.DefaultRouter()
router.register(r'GameInfo', GameInfoViewSet)
router.register(r'Deck', DeckViewSet)
