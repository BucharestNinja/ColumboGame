from django.db import models
from Games.models import *
# Create your models here.
class GameInfo(models.Model):
    playerNo = models.IntegerField(MinValueValidator(1), MaxValueValidator(5)),
    player1Point = models.IntegerField(MinValueValidator(0), MaxValueValidator(1000)),
    player2Point = models.IntegerField(MinValueValidator(0), MaxValueValidator(1000)),
    player3Point = models.IntegerField(MinValueValidator(0), MaxValueValidator(1000)),
    player4Point = models.IntegerField(MinValueValidator(0), MaxValueValidator(1000)),
    player5Point = models.IntegerField(MinValueValidator(0), MaxValueValidator(1000)),

        class Meta:
            db_table='GameInfo'

        def __str__(self):
            return self.deckName
