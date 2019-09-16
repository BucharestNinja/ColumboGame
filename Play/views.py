from django_filters import rest_framework as filters
from rest_framework import viewsets

from .models import Deck
from .serializer import DeckSerializer
# Create your views here.
class DeckFilter(filters.FilterSet):

    # フィルタの定義
    deckName = filters.CharFilter(field_name="deckName", lookup_expr='exact')

    class Meta:
        model = Deck
        fields = ['deckName']

class DeckViewSet(viewsets.ModelViewSet):
    queryset = Deck.objects.all()
    serializer_class  = DeckSerializer
    filter_class = DeckFilter
