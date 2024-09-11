from django.shortcuts import render
from .models import User
from django.views import generic
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from rest_framework import status

# Create your views here.


class UserView(generic.DetailView):
    model = User
    template_name = "users/user.html"
    
@api_view(["GET"])
def get_user_data(request):
    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)