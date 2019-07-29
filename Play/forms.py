from django.forms import ModelForm
from Games.models import *

class MemberForm(forms.form):
    member = forms.CharField(max_length=10)
