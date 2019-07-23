from django.views.generic import CreateView, UpdateView, DeleteView, ListView, DetailView
from .models import Deck
from .forms import DeckForm
from django.urls import reverse_lazy

class DeckCreateView(CreateView):
    model = Deck
    form_class=DeckForm
    template_name="Games/deckCreate.html"
    success_url="/"

class DeckUpdateView(UpdateView):
    model = Deck
    form_class = DeckForm
    template_name = "Games/deckUpdate.html"
    success_url = "/"

class DeckDeleteView(DeleteView):
    model = Deck
    success_url = "/"

class DeckListView(ListView):
    model = Deck
    template_name="Games/deck.html"
