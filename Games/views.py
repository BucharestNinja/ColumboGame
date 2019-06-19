from django.views.generic import CreateView, UpdateView

from .models import Deck
from .forms import DeckForm

class DeckCreateView(CreateView):
    model=Deck
    form_class=DeckForm
    template_name="deck.html"
    success_url="/"

class DeckUpdateView(UpdateView):
    model = Deck
    form_class = DeckForm
    template_name = "deck.html"
    success_url = "/"
