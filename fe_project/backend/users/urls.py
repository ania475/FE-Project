from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path("<int:pk>/", views.UserView.as_view(), name="user"),
    path("get-user/", views.get_user_data, name="get_user_data")
]