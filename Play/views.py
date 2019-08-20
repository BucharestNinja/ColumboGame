
from rest_framework import viewsets, filters

from .models import Deck, GameInfo
from .serializer import GameInfoSerializer, DeckSerializer
# Create your views here.
class GameInfoViewSet(viewsets.ModelViewSet):
    queryset = GameInfo.objects.all()
    serializer_class  = GameInfoSerializer
    filter_fields = ('author')

class DeckViewSet(viewsets.ModelViewSet):
    queryset = Deck.objects.all()
    serializer_class  = DeckSerializer
    filter_fields = ('deckName',)
