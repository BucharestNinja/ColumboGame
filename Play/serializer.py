from rest_framework import serializers

from .models import GameInfo, Deck

class GameInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameInfo
        fields = '__all__'

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = '__all__'
