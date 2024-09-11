from django.urls import path
from . import views

app_name = "facts"

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    # ex: /facts/fact/5/
    path("<int:pk>/", views.DetailView.as_view(), name="fact_detail"),
]