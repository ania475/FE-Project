from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = "__all__"