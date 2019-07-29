from rest_framework import serializers

from .models import GameInfo, Deck

class GameInfoSerializer(serializers.Serializer):
    class Meta:
        model = GameInfo

class DeckSerializer(serializers.Serializer):
    class Meta:
        model = Deck
