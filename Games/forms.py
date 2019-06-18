from django.forms import ModelForm
from .models import Deck

class DeckForm(ModelForm):
    class Meta:
        model = Deck
        fields = ('deckName','card1','card2','card3','card4','card5','card6','card7','card8' ,'card9','card10', 'card11', 'card12','card13','card14','card15','author')
