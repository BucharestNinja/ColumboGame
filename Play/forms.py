from django.forms import ModelForm
from Games.models import *

class DeckForm(forms.form):
    member = forms.CharField(max_length=10)
    
